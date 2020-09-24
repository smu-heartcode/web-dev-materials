const stripIndent = require('strip-indent');

String.prototype.trimIndent = function () {
  return stripIndent(this)
}

module.exports = {
  'day1': {
    sections: [
      {
        topic: 'HTML',
        list: [
          {
            title: "Heading",
            tags: [
              "<h1>",
            ],
            code: `
              <h1>Hello I am h1</h1>
              <h2>Hello I am h2</h2>
              <h3>Hello I am h3</h3>
              <h4>Hello I am h4</h4>
              <h5>Hello I am h5</h5>
              <h6>Hello I am h6</h6>
            `.trimIndent()
          },
          {
            title: "Paragraph",
            tags: [
              "<p>",
              "<br>",
            ],
            code: `
              <p>Hello,I am a
              paragraph.</p>

              <p>Hello,I am a<br>
              paragraph.</p>
            `.trimIndent()
          },
          {
            title: "Bold/Underline/Italic",
            tags: [
              "<b>",
              "<u>",
              "<i>",
            ],
            code: `
              <p><b>Bold</b> and <i>Italic</i></p>

              <h3><u>Underline</u> me</h3>
            `.trimIndent()
          },
          {
            title: "List Items",
            tags: [
              "<ul>",
              "<ol>",
              "<li>",
            ],
            code: `
              <ul>
                <li>Something</li>
                <li>Another thing</li>
              </ul>
              <ol>
                <li>My number 1</li>
                <li>You can <u>u</u> this 2.</li>
              </ol>
            `.trimIndent()
          }
        ]
      },
      {
        topic: 'Navigation',
        list: [
          {title: "Pages", tags: ["/pages/name.vue"], code: ``},
          {title: "Anchor", tags: ["<a href='/name'>"], code: ``},
        ],
      },
      {
        topic: 'Media',
        list: [
          {title: "Static", tags: ["/static/image.png"], code: ``},
          {title: "Image", tags: ["<img src='image.png'>"], code: ``},
        ],
      },
      {
        topic: 'CSS',
        list: [
          {title: "Colors", tags: ["color:"], code: ``},
          {title: "Grouping", tags: ["<div>"], code: ``},
          {title: "Padding", tags: ["padding:"], code: ``},
        ],
      },
    ],
  },
  'day2': {
    sections: [
      {
        topic: 'Javascript & HTML',
        list: [
          {title: "Looping", tags: ["v-for"], code: ``},
          {title: "Components", tags: ["<name>"], code: ``},
        ],
      },
      {
        topic: 'Javascript & Reactivity',
        list: [
          {title: "Button", tags: ["button"], code: ``},
          {title: "Mutating", tags: ["{{value}}"], code: ``},
          {title: "Conditional", tags: ["v-if"], code: ``},
          {title: "Interval", tags: ["button"], code: ``},
          {title: "Random", tags: ["Random"], code: ``},
        ],
      },
      {
        topic: 'Example: Homework Tracker',
        list: [
        ],
      },
    ],
  },
  'day3': {
    sections: [
      {
        topic: 'Library',
        list: [
          {title: "Getting data", tags: ["get"], code: ``},
          {title: "Updating data", tags: ["put"], code: ``},
          {title: "Deleting data", tags: ["delete"], code: ``},
        ],
      },
      {
        topic: 'Example: Lyrics',
        list: []
      },
      {
        topic: 'Example: Game',
        list: []
      }
    ],
  },
  'day4': {
    sections: [
      {
        topic: '',
        list: [],
      }
    ],
  },
  'day5': {
    sections: [
      {
        topic: '',
        list: [],
      }
    ],
  },
}
