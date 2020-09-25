module.exports = {
  'day1': {
    sections: [
      {
        topic: "General",
        list: [
          {
            title: "Page Structure",
            tags: ["/pages/index.vue"],
            code: `
              <!--
              pages/
              ├── index.vue
              -->

              <template>
                <div>
                  <h1>Hello World</h1>
                </div>
              </template>
            `
          },
        ]
      },
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
            `
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
            `
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
            `
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
            `
          },
          {
            title: "Grouping",
            tags: [
              "<div>",
            ],
            code: `
              <div>
                <h1>Relevant Header</h1>
                <p>You can group relevant content together.</p>
              </div>
            `
          }
        ]
      },
      {
        topic: 'Navigation',
        list: [
          {
            title: "Pages",
            tags: ["/pages/new.vue"],
            code: `
              <template>
                <div>
                  <h1>New Page 🚀</h1>
                  <h3>😀🤪🙄🤟</h3>
                  <p>My newly created page.</p>
                </div>
              </template>
            `
          },
          {
            title: "Link Page",
            tags: [`<a href="/new">`],
            code: `
              <a href="/new">Go to new page</a>

              <a href="/new">
                <h1>It can be anything!</h1>
              </a>
            `
          },
          {
            title: "Button",
            tags: [`<button>`],
            code: `
              <a href="/new">
                <button>
                  New Page
                </button>
              </a>
            `
          }
        ],
      },
      {
        topic: 'Media',
        list: [
          {
            title: "Image",
            tags: [`<img src="/meme.png">`],
            code: `
              <!--
              static/
              ├── meme.png <-- This is where meme.png is at.
              ├── pikachu.jpg
              ├── other.png <-- You can add other here.
              -->

              <img width="240px" src="/meme.png">

              <img width="80px" src="/meme.png">
            `
          },
        ],
      },
      {
        topic: 'CSS',
        list: [
          {
            vue: true,
            title: "Text Colors",
            tags: ["color:"],
            code: `
              <template>
                <div>
                  <h1 class="red">Red!</h1>
                  <h3 class="red">HeartCode HeartCode</h3>

                  <div class="blue">
                    <h1>Thunderstorm!</h1>
                    <p>⚡️ oh yeah!</p>
                  </div>
                </div>
              </template>

              <style>
              .red {
                color: red;
              }

              .blue {
                color: #0000ff;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Background Color",
            tags: ["background:"],
            code: `
              <template>
                <div>
                  <h1 class="background-pink">Pink</h1>
                </div>
              </template>

              <style>
              .background-pink {
                background: pink;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Padding",
            tags: [
              "padding:",
              "padding-left:",
              "padding-right:",
              "padding-top:",
              "padding-bottom:",
            ],
            code: `
              <template>
                <div>
                  <h1 class="background-pink">Pink Header</h1>
                  <p class="content">Pink Content</p>
                </div>
              </template>

              <style>
              .background-pink {
                background: pink;

                padding: 16px;
              }

              .content {
                color: hotpink;
                padding-top: 24px;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Border",
            tags: [
              "border-width:",
              "border-color:",
              "border-*-*:",
            ],
            code: `
              <template>
                <div>
                  <h1 class="border-pink">Border Header</h1>
                  <p class="content">Half Border Content</p>
                </div>
              </template>

              <style>
              .border-pink {
                border-color: deeppink;
                border-width: 1px;

                padding: 24px;
              }

              .content {
                border-color: deeppink;
                border-left-width: 1px;
                border-right-width: 1px;

                padding: 24px;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Round Radius",
            tags: [
              "radius-radius:",
            ],
            code: `
              <template>
                <div>
                  <h1 class="border-pink">Round Header</h1>
                  <div class="give-me-space"></div>
                  <p class="content">Round Content</p>
                </div>
              </template>

              <style>
              .border-pink {
                border-color: deeppink;
                border-width: 1px;
                padding: 24px;

                border-radius: 8px;
              }

              .give-me-space {
                padding-top: 24px;
              }

              .content {
                background: lightgreen;
                padding: 24px;

                border-radius: 8px;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Width & Height",
            tags: [
              "width:",
              "height:",
            ],
            code: `
              <template>
                <div>
                  <div class="square"></div>
                  <div class="rectangle"></div>
                </div>
              </template>

              <style>
              .square {
                border-color: deeppink;
                border-width: 1px;

                width: 120px;
                height: 120px;
              }

              .rectangle {
                background: darkgreen;

                width: 240px;
                height: 120px;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Text Styling",
            tags: [
              "text-align:",
              "height:",
            ],
            code: `
              <template>
                <div>
                  <h1 class="text-right">Right</h1>

                  <h3 class="text-center">Center</h3>
                </div>
              </template>

              <style>
              .text-right {
                text-align: right;
              }

              .text-center {
                text-align: center;
              }
              </style>
            `
          },
        ],
      },
      {
        topic: 'Mixing them together!',
        list: [
          {
            vue: true,
            title: "Game Card",
            tags: [

            ],
            code: `
              <template>
                <div>
                  <div class="card">
                    <h4 class="header">
                    Surprised Pikachu • <i>100 HP</i>
                    </h4>

                    <img src="/pikachu.jpg">

                    <p class="information">
                      <b>Surprised Pikachu</b>
                      refers to a screenshot from the Pokémon
                      anime of the character Pikachu with its
                      mouth agape, as though it were surprised
                      at something.
                    </p>

                    <h6 class="collection">
                    🃏 HeartCode 2020 Collection
                    </h6>
                  </div>
                </div>
              </template>

              <style>
              .header {
                 padding-bottom: 8px;
              }

              .card {
                border-radius: 5px;
                border-width: 5px;
                border-color: #e0ca1f;
                background: #ffe62d;

                padding: 18px;
                width: 300px;
              }

              .information {
                padding-top: 12px;
              }

              .collection {
                padding-top: 12px;
                color: #e92929;
                text-align: right;
              }
              </style>
            `
          },
        ]
      },
    ],
  },
  'day2': {
    sections: [
      {
        topic: 'Javascript & HTML',
        list: [
          {
            vue: true,
            title: "Components",
            tags: ["<name>"],
            code: ``
          },
          {
            vue: true,
            title: "Looping",
            tags: ["v-for"],
            code: `

            `
          },
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
        list: [],
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
