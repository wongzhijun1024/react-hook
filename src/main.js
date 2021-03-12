import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import http from "./net/api";
import store from "./store/index";
// 配置 Vue 插件
Vue.use(ElementUI);

Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({ store, router, render: (h) => h(App) }).$mount("#app");
