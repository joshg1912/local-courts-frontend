import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import CreateNew from "../views/CreateNew.vue";
import MyCourts from "../views/MyCourts.vue";
import CourtsShow from "../views/CourtsShow.vue";
import CourtEdit from "../views/CourtEdit.vue";
import ApiTest from "../views/ApiTest.vue";
import Homepage from "../views/Homepage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/courts",
    name: "courts",
    component: Home,
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/courts/new", name: "create-court", component: CreateNew },
  { path: "/mycourts", name: "my-courts", component: MyCourts },
  { path: "/courts/:id", name: "courts-show", component: CourtsShow },
  { path: "/courts/:id/edit", name: "court-edit", component: CourtEdit },
  { path: "/test", name: "test", component: ApiTest },
  { path: "/", name: "homepage", component: Homepage },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
