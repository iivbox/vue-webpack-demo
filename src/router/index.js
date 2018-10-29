import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';


const routes = routerConfig;
Vue.use(Router);

export default new Router({
  routes,
});
