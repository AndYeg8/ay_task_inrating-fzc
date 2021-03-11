import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: JSON.parse(localStorage.getItem('users') || '[]')
  },
  mutations: {
    createUser(state, user) {
      state.users.push(user)
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    updateUser(state, { id, name, surname, phone, email }) {
      const users = state.users.concat()
      const idx = users.findIndex(u => u.id === id)
      const user = users[idx]
      users[idx] = { ...user, name, surname, phone, email }
      state.users = users
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    deleteUser(state, { id, name, surname, phone, email }) {
      const users = state.users.concat()
      const idx = users.findIndex(u => u.id === id)
      const user = users[idx]
      users[idx] = { ...user, name, surname, phone, email }
      state.users = users
      localStorage.removeItem(JSON.stringify(state.users))
    },
  },
  actions: {
    createUser({commit}, user) {
      commit('createUser', user)
    },
    updateUser({commit}, user) {
      commit('updateUser', user)
    },
    deleteUser({ commit }, user) {
      commit('removeUser', user)
    }
  },
  // modules: {
  // },
  getters: {
      users: s => s.users,
      userById: s=> id => s.users.find(u => u.id === id)
  },
})
