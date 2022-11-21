import { createApp } from "../../../Chapter 11 - Create and Read Data from Firebase Collection/Code/node_modules/vue/dist/vue";
import {
  createRouter,
  createWebHistory,
} from "../../../Chapter 11 - Create and Read Data from Firebase Collection/Code/node_modules/vue-router/dist/vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "@/routerConfig.js";
import { Quasar } from "../../../Chapter 11 - Create and Read Data from Firebase Collection/Code/node_modules/quasar/dist/types";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/dist/quasar.css";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();

app.use(pinia);

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(router);
app.mount("#app");
