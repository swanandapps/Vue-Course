import { createApp } from "../../../Chapter 11 - Create and Read Data from Firebase Collection/Code/node_modules/vue/dist/vue";
import {
  createRouter,
  createWebHistory,
} from "../../../Chapter 11 - Create and Read Data from Firebase Collection/Code/node_modules/vue-router/dist/vue-router";
import routes from "@/routerConfig.js";

import App from "@/App.vue";

import { Quasar } from "../../../Chapter 11 - Create and Read Data from Firebase Collection/Code/node_modules/quasar/dist/types";

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
