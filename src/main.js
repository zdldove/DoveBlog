// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// common script
import config from './lib/config.js'
Vue.use(config)
import CommonJs from './function/common.js'
Vue.use(CommonJs)

// element ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

// highlight
import hljs from 'highlight.js'
Vue.prototype.hljs = hljs;

Vue.component('ueditor', () => import('vue-ueditor-wrap'))

// 封装的axios
import _http from './lib/_http.js';
Vue.use(_http);

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})
