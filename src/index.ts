import * as $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from './App.vue';
import router from './router';

$(document).ready(() => {
    new Vue({
        el: '#app',
        router,
        render: h => h(App)
      });
});