import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "@/routerConfig.js";

import App from "@/App.vue";

import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

myApp.use(router);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
