#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const cac = require('cac')
const chalk = require('chalk')
const {version} = require('./package.json')
const archiver = require('archiver');
const axios = require('axios')

const cli = cac('heartcode-deploy')

function zip(done) {
  const output = fs.createWriteStream('.nuxt/dist.zip')
  const archive = archiver('zip', {})

  output.on('close', () => {
    done()
  })

  archive.on('error', err => {
    throw err
  })

  archive.pipe(output);

  archive.directory('dist', false)
  archive.finalize()
}

function upload(username, password, done) {
  const config = {
    method: 'post',
    url: `https://api.heartcode.app/_cli_/deploy/${username}`,
    headers: {
      'Authorization': `Bearer ${password}`,
      'Content-Type': 'application/zip'
    },
    data: fs.createReadStream('.nuxt/dist.zip')
  }

  axios(config)
    .then(({data}) => {
      if (data.status.code === 200) {
        done()
      }
    })
    .catch(error => {
      done(error)
    });
}

cli
  .command('[...username-password]', 'Deploy into heartcode.app with your username and classroom password')
  .action(([username, password]) => {
    zip(() => {
      upload(username, password, (data, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(chalk.green(`✔  Successfully`) + ` uploaded to https://${username}.heartcode.app`)
        }
      })
    })
  })

cli.help()
cli.version(version)
cli.parse()
