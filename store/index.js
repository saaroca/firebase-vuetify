import axios from 'axios'

export const state = () => ({
  games: [],
})

export const mutations = {
  llenar(state, value) {
    state.games = value
  },
}

export const actions = {
  async get({ commit }) {
    await axios
      .get(
        'https://fire-nuxt-10d97-default-rtdb.europe-west1.firebasedatabase.app/juegos.json'
      )
      .then((res) => {
        commit('llenar', res.data)
      })
  },
}
