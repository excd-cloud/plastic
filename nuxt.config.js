// ./nuxt.config.js
const config = require("./.contentful.json");

require("dotenv").config();
const client = require("./plugins/contentful");

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
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: config.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return [...entries.item.map(entry => `posts/${entry.fields.slug}`)];
        });
    }
  },
  plugins: ["~/plugins/contentful", "~/plugins/vee-validate"],
  /*
   ** Modules
   */
  modules: [
    "nuxt-fontawesome",
    "@nuxtjs/markdownit",
    "nuxt-vue-multiselect",
    "@nuxtjs/dotenv"
  ],
  scripts: {
    generate: "nuxt generate"
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  },
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  },
  buildModules: ["@nuxt/components"],
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
  // ...
  /*
   ** Customize the progress bar color
   */
  loading: "~/components/loading.vue",
  /*
   ** Build configuration
   */
  extends: ["plugin:vue/vue3-recommended"],
  build: {
    transpile: ["vee-validate/dist/rules"],
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
