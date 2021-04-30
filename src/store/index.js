import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {
      name: "",
      imageUrl: ""
    },
  },

  getters:{
    isLoggedIn: state => !!state.token,
    getUser: state => state.user,
  },

  mutations: {
    auth_success(state, token, user){
      state.status = 'success'
      state.user = user
      state.token = token
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = '',
      state.token = ''
    },
  },

  actions: {
    login({commit}, user){
      return new Promise(() => {
        //token can be change
        const token = 'ford'
        localStorage.setItem('token', token)
        
        //user can't be pass value 
        commit('auth_success', token , user)
      })
    },

    logout({commit}){
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        resolve()
      })
    }
  },

  modules: {
  }
})
