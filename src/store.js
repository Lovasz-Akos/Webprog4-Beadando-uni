import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './services/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
        username: null,
        userId: null
    },

    actions: {
        authenticate(context) {
            context.commit('authenticate');
        }
    }
})