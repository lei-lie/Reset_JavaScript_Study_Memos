import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.5,
  loading: require('./assets/imgs/loading.png'), //加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/imgs/Error.png'), //加载失败图片
  attempt: 2,
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
