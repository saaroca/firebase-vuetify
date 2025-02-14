<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <Form
      boton="Editar juego"
      @submit="editarJuego"
      :game="game"
      @eliminar="eliminar($route.params.id)"
    />
  </div>
</template>

<script>
import Form from '~/components/Form.vue'
import axios from 'axios'
export default {
  components: {
    Form,
  },
  asyncData(context) {
    return axios
      .get(
        'https://fire-nuxt-10d97-default-rtdb.europe-west1.firebasedatabase.app/juegos/' +
          context.params.id +
          '.json'
      )
      .then((res) => {
        return { game: res.data }
      })
  },
  methods: {
    editarJuego(form) {
      axios
        .put(
          'https://fire-nuxt-10d97-default-rtdb.europe-west1.firebasedatabase.app/juegos/' +
            this.$route.params.id +
            '.json',
          form
        )
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
      this.$router.push('/')
    },
    eliminar(index) {
      axios
        .delete(
          'https://fire-nuxt-10d97-default-rtdb.europe-west1.firebasedatabase.app/juegos/' +
            index +
            '.json'
        )
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
      this.$router.push('/')
    },
  },
}
</script>
