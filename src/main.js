import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Vue2Filters from "vue2-filters";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://guarded-plateau-03969.herokuapp.com/"
    : "/";



var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;
Vue.use(Vue2Filters);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
