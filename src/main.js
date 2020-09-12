import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./storage/vuex";
import { firestorePlugin } from "vuefire";

import "./assets/tailwind.css";
import "./assets/typography.css";

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
