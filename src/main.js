import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

var a = new Vue({
    store,
    render: h => h(App)
}).$mount('#app')

// eslint-disable-next-line no-console
console.log(a)