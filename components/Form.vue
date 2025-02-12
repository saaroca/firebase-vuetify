<template>
  <div>
    <form>
        <v-text-field v-model="form.nombre"
        label="Nombre del juego"
        required
        :counter="50"></v-text-field>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      form: {
        nombre: '',
        genero: '',
        consola: '',
        portada: '',
        sinopsis: '',
      },
    }
  },
}
</script>
