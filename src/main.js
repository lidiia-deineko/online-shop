import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from 'vue-router';
import Cart from "@/components/Cart.vue";


Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path: '/cart', component: Cart}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
