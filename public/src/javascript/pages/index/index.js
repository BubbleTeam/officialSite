import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import template from './index.html';
import router from 'script/routes';
import store from 'script/store';
import 'source/less/base.less';

Vue.use(Vuex);
Vue.use(VueRouter);

const vm = new Vue({
    el: '#app',
    template,
    router,
    store,
    modules: {
        
    }
});