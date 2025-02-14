<template>
  <div>
    <h1>Guardar juego</h1>
    <Form boton="Guardar juego" @submit="guardarJuego" />
  </div>
</template>

<script>
import Form from '~/components/Form.vue'
import axios from 'axios'
export default {
  components: {
    Form,
  },
  methods: {
    guardarJuego(form) {
      axios
        .post(
          'https://fire-nuxt-10d97-default-rtdb.europe-west1.firebasedatabase.app/juegos.json',
          form
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      this.$router.push('/')
    },
  },
}
</script>
