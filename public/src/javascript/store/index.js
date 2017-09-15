import Vue from 'vue';
import Vuex from 'vuex';
import state from './global/state.js';
import getters from './global/getters.js';
import mutations from './global/mutations.js';
import actions from './global/getters.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;