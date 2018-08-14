import Vue from 'nativescript-vue';

import HelloWorld from './components/HelloWorld';


import './styles.scss';

Vue.config.silent = false;
new Vue({

  render: h => h(HelloWorld),


}).$start();
