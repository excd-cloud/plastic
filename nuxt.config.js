// ./nuxt.config.js
const config = require("./.contentful.json");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Sayonara Plastic",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "nuxt.js sayonara plastic app"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Modules
   */
  modules: ["nuxt-fontawesome", "@nuxtjs/markdownit"],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: ["markdown-it-div", "markdown-it-attrs"]
  },
  /*
   ** Fonts
   */
  link: [
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap"
    }
  ],
  /*
   ** CSS
   */
  css: ["@/css/main.css", "@/css/main.scss"],
  // ...
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  plugins: ["~plugins/contentful", "~/plugins/posts"],
  // ...
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
