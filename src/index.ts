import * as $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from './App.vue';

$(document).ready(() => {
    new Vue({
        el: '#app',
        render: h => h(App)
      });
});