import Vue from 'vue'
import App from './App.vue'
import "normalize.css";
import "flex.css"
import "@/assets/style.css"
import router from  '@/config/router'
import store from '@/config/store';

import winPlay from './plugin/winplay/index'
Vue.config.productionTip = false
Vue.use(winPlay)
new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
});
