import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/app'
import user from '@/store/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    app,
    user
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
