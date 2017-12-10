import Vue from 'vue'
import App from './App.vue'
import appHeader from './components/header.vue'
import appFooter from './components/footer.vue'


Vue.component('header-component', appHeader);

Vue.component('footer-component', appFooter);

new Vue({
  el: '#app',
  render: h => h(App)
})
