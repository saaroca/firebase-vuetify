import axios from 'axios'

export default function ({ store }) {
  axios
    .get(
      'https://fire-nuxt-10d97-default-rtdb.europe-west1.firebasedatabase.app/juegos.json'
    )
    .then((res) => {
      store.commit('llenar', res.data)
    })
}
