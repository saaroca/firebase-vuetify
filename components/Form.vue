<template>
  <div>
    <form>
      <v-text-field
        v-model="form.nombre"
        label="Nombre del juego"
        required
        :counter="50"
      ></v-text-field>

      <v-text-field
        v-model="form.genero"
        label="Género del juego"
        required
        :counter="50"
      ></v-text-field>

      <v-select
        v-model="form.consola"
        :items="items"
        label="Consola"
        required
      ></v-select>

      <v-text-field
        v-model="form.portada"
        label="Género del juego"
        required
      ></v-text-field>

      <v-textarea
        v-model="form.sinopsis"
        label="Sinopsis"
        required
      ></v-textarea>

      <v-btn color="primary" type="submit">{{ boton }}</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    boton: '',
  },
  data() {
    return {
      form: {
        nombre: '',
        genero: '',
        consola: '',
        portada: '',
        sinopsis: '',
      },
      items: ['PlayStation 4', 'Xbox One', 'Nintendo Switch', 'PC'],
    }
  },
}
</script>
