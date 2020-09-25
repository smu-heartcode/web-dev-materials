// noinspection HtmlRequiredAltAttribute,HtmlUnknownTarget
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
              "font-size:",
              "font-weight:",
            ],
            code: `
              <template>
                <div>
                  <h1 class="text-right">Right</h1>

                  <h3 class="text-center">Center</h3>

                  <div class="text-big">
                    Text Big Big Big Big
                  </div>
                </div>
              </template>

              <style>
              .text-right {
                text-align: right;
              }

              .text-center {
                text-align: center;
              }

              .text-big {
                font-size: 48px;
                font-weight: 700;
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
            tags: [],
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
        topic: 'Components',
        list: [
          {
            vue: true,
            title: "Creating components",
            tags: [
              "/components/custom.vue",
              "<custom>",
            ],
            code: `
              <!--
              components/
              ├── custom.vue
              -->
              <template>
                <div>
                  <h1>Custom Component</h1>
                  <p>Custom Content</p>
                </div>
              </template>

              <!--
              You can use <custom></custom> anywhere now.
              -->
            `
          },
        ],
      },
      {
        topic: 'Javascript',
        list: [
          {
            vue: true,
            title: "Basic Structure",
            tags: [
              "<script>",
              "return { }",
              "{{name}}",
            ],
            code: `
              <template>
                <div>
                  {{name}}
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { name: "Hello" }
                }
              }
              </script>
            `
          },
          {
            vue: true,
            title: "Math Operation",
            tags: [
              "+",
              "-",
              "/",
              "*",
              "%",
            ],
            code: `
              <template>
                <div>
                  <h3>{{count + 10}}</h3>
                  <h3>{{count - 20}}</h3>
                  <h3>{{count / 5}}</h3>
                  <h3>{{count * 5}}</h3>
                  <br><br>
                  <h3>{{count % 14}}</h3>
                  <h3>{{count % 5}}</h3>
                  <h3>{{count % 6}}</h3>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { count: 15 }
                }
              }
              </script>
            `
          },
          {
            vue: true,
            title: "Text Operation",
            tags: [
              "===",
              "+",
            ],
            code: `
              <template>
                <div>
                  <div>
                    <h3>{{text}} 2020</h3>
                    <h3>{{text + " 2020"}}</h3>
                    <h3>{{text + " " + year}}</h3>
                    <h3>{{text}} {{year}}</h3>
                  </div>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { text: "HeartCode", year: 2020 }
                }
              }
              </script>
            `
          },
          {
            vue: true,
            title: "True/False Operation",
            tags: [
              "===",
              "!==",
            ],
            code: `
              <template>
                <div>
                  <div>
                    <h3>{{text === "HeartCode"}}</h3>
                    <h3>{{text === "Not HeartCode"}}</h3>
                    <h3>{{text !== "Not HeartCode"}}</h3>
                  </div>
                  <br>
                  <div>
                    <h3>{{year === 2020}}</h3>
                    <h3>{{year !== 2020}}</h3>
                  </div>
                  <br>
                  <ul>
                    <li>{{10 > 5}}</li>
                    <li>{{10 >= 10}}</li>
                    <li>{{10 < 5}}</li>
                    <li>{{10 <= 10}}</li>
                  </li>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { text: "HeartCode", year: 2020}
                }
              }
              </script>
            `
          },
          {
            vue: true,
            title: "Complex Operation",
            tags: [
              "+",
              "()",
            ],
            code: `
              <template>
                <div>
                  <h3>{{ text + year === "HeartCode2020" }}</h3>
                  <br>
                  <h3>{{ year * (year + 10) - (5 * 100) }}</h3>
                  <br>
                  <h3>10 even: {{ 10 % 2 === 0 }}</h3>
                  <h3>10 odd: {{ 10 % 2 !== 0 }}</h3>
                  <h3>15 multiples of 5: {{ 15 % 5 === 0 }}</h3>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return {
                    text: "HeartCode",
                    year: 2020,
                  }
                }
              }
              </script>
            `
          },
        ]
      },
      {
        topic: 'Reactivity: Input & Button',
        list: [
          {
            vue: true,
            title: "Button",
            tags: [
              "<button>",
              '@click=',
            ],
            code: `
              <template>
                <div>
                  <h1>{{count}}</h1>

                  <button @click="count = count + 1">
                  +1
                  </button>

                  <button @click="count = count + 5">
                  +5
                  </button>

                  <button @click="count = count + 10">
                  +10
                  </button>

                  <button @click="count = count - 2">
                  -2
                  </button>

                  <button @click="count = 0">
                  RESET
                  </button>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { count: 0 }
                }
              }
              </script>
            `
          },
          {
            vue: true,
            title: "Text Input",
            tags: ["input"],
            code: `
              <template>
                <div>
                  <input v-model="text">
                  <br><br>
                  <h3>{{text}}</h3>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { text: "Edit me" }
                }
              }
              </script>
            `
          },
        ]
      },
      {
        topic: 'Reactivity: Logic',
        list: [
          {
            vue: true,
            title: "Conditional",
            tags: [
              'v-if="true"',
              'v-if="false"',
            ],
            code: `
              <template>
                <div>
                  <h4 v-if="count % 2 === 0">
                  I am even
                  </h4>
                  <h4 v-if="count % 2 !== 0">
                  I am Odd
                  </h4>

                  <div class="padding-top-10">
                    <input v-model="count">
                  </div>

                  <div class="padding-top-10">
                    <button @click="count = count + 1">
                    Add One
                    </button>
                  </div>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { count: 0 }
                }
              }
              </script>

              <style>
              .padding-top-10 {
                padding-top: 10px;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Looping",
            tags: [
              'v-for="_ in _"',
              'v-if="true/false"',
            ],
            code: `
              <template>
                <div>
                  <div v-for="item in list">
                    <h1>I am {{item}}</h1>
                    <p class="even" v-if="item % 2 === 0">
                    I am even.
                    </p>
                    <p class="odd" v-if="item % 2 !== 0">
                    I am odd.
                    </p>
                  </div>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { list: [1,2,3,4,5] }
                }
              }
              </script>

              <style>
              .odd {
                background: lightpink;
                padding: 8px;
              }
              .even {
                background: lightskyblue;
                padding: 8px;
              }
              </style>
            `
          },
          {
            vue: true,
            title: "Random",
            tags: ["Math.random()", "Math.round()"],
            code: `
              <template>
                <div>
                  <h4>{{count * 10}}</h4>
                  <h4>{{count * 100}}</h4>
                  <h4>{{count * 1000}}</h4>
                  <h4>{{count * 50}}</h4>

                  <h4>{{Math.round(count * 300)}}</h4>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return { count: Math.random() }
                }
              }
              </script>
            `
          },
          {
            vue: true,
            title: "Interval",
            tags: [
              "setInterval(() => {}, 1000)",
              "if(true/false)",
              "if(this.count % 2 === 0)",
            ],
            code: `
              <template>
                <div>
                  <h1>{{count}} + {{rand}}</h1>
                  <h1> = </h1>
                  <h1>{{count + rand}}</h1>
                  <br>
                  <h3>Is it even? {{even}}</h3>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return {
                    rand: 0, count: 0, even: true
                  }
                },
                mounted() {
                  setInterval(() => {
                    this.count = this.count + 1
                    this.rand = Math.round(Math.random() * 20)

                    if ((this.rand + this.count) % 2 === 0) {
                      this.even = true
                    } else {
                      this.even = false
                    }
                  }, 1000)
                },
              }
              </script>
            `
          },
        ],
      },
      {
        topic: 'Combining Them Together',
        list: [
          {
            vue: true,
            title: "Math Game",
            tags: [
              "setInterval()",
              "Math.random",
            ],
            code: `
              <template>
                <div>
                  <div class="keyboard">
                    <h1>{{rand1}} + {{rand2}}</h1>
                    <h1> = </h1>

                    <input class="input" v-model="answer">
                  </div>
                  <br>
                  <div class="score" v-if="round > 0">
                    <h3>Score: {{score}}</h3>
                    <h3>Rounds: {{round}}</h3>
                  </div>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return {
                    round: 0,
                    score: 0,
                    answer: "",
                    rand1: 0,
                    rand2: 0
                  }
                },
                mounted() {
                  setInterval(() => {
                    if (this.rand1 + this.rand2 === Number.parseInt(this.answer)) {
                      this.score = this.score + 1
                    }

                    this.answer = ""

                    this.rand1 = Math.round(Math.random() * 100)
                    this.rand2 = Math.round(Math.random() * 100)

                    this.round = this.round + 1
                  }, 4000)
                },
              }
              </script>

              <style>
              .keyboard {
                padding: 16px;
                background: black;
                color: white;
                border-radius: 3px;
              }

              .input {
                color: black;
                background: white;
              }

              .score {
                padding: 16px;
                background: black;
                color: white;
                border-radius: 3px;
              }
              </style>
            `
          },
        ],
      },
    ],
  },
  'day3': {
    sections: [
      {
        topic: 'Methods',
        list: [
          {
            vue: true,
            title: "Click",
            tags: ["@click"],
            code: `
              <template>
                <div>
                  <button @click="clicked">Button</button>
                  <br>
                  <h2>{{text}}</h2>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return {
                    text: ""
                  }
                },
                methods: {
                  clicked() {
                    this.text = "CLICKED"
                  }
                }
              }
              </script>
            `
          },
        ]
      },
      {
        topic: "Data structure",
        list: [
          {
            title: "Learning API",
            tags: [],
            code: `
              <h1>Learning API</h1>
              <p>
              I think the problem with learning API
              is that you need to be exposed
              to much more programming fundamentals.
              </p>

              <p class="t-mt-4">
              Without knowledge of data structure like dictionary and list,
              they won't really understand what is going on.
              </p>

              <p class="t-mt-4">

              </p>
            `
          }
        ]
      },
      {
        topic: 'Library (API)',
        list: [
          {
            vue: true,
            title: "Updating data",
            tags: ["put"],
            code: `

            `
          },
          {
            vue: true,
            title: "Getting data",
            tags: ["get"],
            code: `

            `
          },
          {
            vue: true,
            title: "Deleting data",
            tags: ["delete"],
            code: `

            `
          },
          {
            vue: true,
            title: "Put/Get/Delete Library Data",
            tags: ["put", "get", "delete"],
            code: `
              <template>
                <div>
                  <div class="pad-bot">
                    <input
                    placeholder="Title"
                    class="text-big"
                    v-model="content.title"
                    >
                  </div>
                  <div class="pad-bot">
                    <textarea
                    placeholder="Body"
                    rows="8"
                    v-model="content.text"
                    ></textarea>
                  </div>
                  <div class="pad-bot">
                    <button @click="getContent">Get</button>
                    <button @click="updateContent">Update</button>
                    <button @click="deleteContent">Delete</button>
                  </div>
                </div>
              </template>

              <script>
              export default {
                data() {
                  return {
                    content: {
                      title: "",
                      body: ""
                    }
                  }
                },
                methods: {
                  getContent() {
                    this.$axios
                      .$get('https://api.heartcode.app/library/fuxing', {
                        headers: {Authorization: "Bearer ..."}
                      })
                      .then((content) => {
                        this.content = content.data[0].body
                      })
                  },
                  updateContent() {
                    this.$axios
                      .$put(
                        'https://api.heartcode.app/library/fuxing'
                        , this.content
                        , {headers: {Authorization: "Bearer ..."}})
                  },
                  deleteContent() {
                    this.$axios
                      .$delete('https://api.heartcode.app/library/fuxing', {
                        headers: {Authorization: "Bearer ..."}
                      })
                  }
                }
              }
              </script>

              <style>
              .pad-bot {
                padding-bottom: 8px;
              }

              .text-big {
                font-size: 20px;
                font-weight: 600;
              }
              </style>
            `
          },
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
