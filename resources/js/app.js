/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import VueRouter from 'vue-router'



import Marks from './components/Marks'
import Notifications from './components/Notifications'
import Admin from './components/Admin'
import Regulations from './components/Regulations'
import Home from './components/Home'
import Profile from './components/Profile'
import Departments from './components/Departments'
import Syllabus from './components/Syllabus'
import Results from './components/Results'
import BatchMates from './components/BatchMates'
// import some global styles
// import './styles/style.scss'

Vue.use(VueRouter)

const routes = [
  { path: '/marks', component: Marks },
  { path: '/Notifications',component: Notifications},
  { path: '/Admin',component: Admin},
  { path: '/',component: Home},
  { path: '/regulations',component: Regulations},
  { path: '/Profile',component: Profile },
  { path: '/departments', component: Departments},
  { path: '/syllabus', component: Syllabus},
  { path: '/batchmates', component: BatchMates},
  { path: '/results', component: Results},

]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})