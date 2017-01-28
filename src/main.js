//window.$ = window.jQuery = require('jquery');
//import '../node_modules/materialize-css/dist/css/materialize.min.css'
//import '../node_modules/materialize-css/dist/js/materialize.min.js'

const axios = require ('axios');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
    axios,
    el        : '#app',
    template  : '<App/>',
    components: {App}
});
