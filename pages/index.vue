<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4 v-for="(item, index) in games" :key="index">
          <v-card color="primary">
            <v-layout>
              <v-flex xs5>
                <v-img :src="item.portada" height="125px" contain></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title="">
                  <div>
                    <div class="headline">{{ item.nombre }}</div>
                    <div>{{ item.genero }}</div>
                    <div>{{ item.consola }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-card-actions class="pa-3">
              <v-dialog width="800">
                <template v-slot:activator="{ on }">
                  <v-btn style="margin-right: 9px" v-on="on">Ver más...</v-btn>
                </template>

                <v-card>
                  <v-card-title
                    class="headline primary lighten-2"
                    primary-title=""
                  >
                    Sinopsis
                  </v-card-title>
                  <div class="pa-2">
                    <v-card-text>{{ item.sinopsis }}</v-card-text>
                  </div>
                </v-card>
              </v-dialog>
              <v-btn color="warning" @click="editar(index)">Editar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['games']),
  },
  async fetch({ store }) {
    await store.dispatch('get')
  },
  middleware: 'games',
  methods: {
    editar(index) {
      this.$router.push(`/editar/${index}`)
    },
  },
}
</script>
