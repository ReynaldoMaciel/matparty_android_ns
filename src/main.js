import Vue from 'nativescript-vue';

import RegisterUser from './components/RegisterUser';

import store from "./store";

import './styles.scss';

Vue.config.silent = false;
new Vue({

  render: h => h(RegisterUser),
  //render: h => h(Todo),
  store

}).$start();
