import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { SidebarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles.css'
import { BSidebar } from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import Vuesax from 'vuesax'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})

Vue.use(Vuetify)

Vue.use(VueSidebarMenu)
Vue.component('b-sidebar', BSidebar)
Vue.use(VueAxios, axios)
Vue.use(SidebarPlugin)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
