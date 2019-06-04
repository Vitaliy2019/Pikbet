<template>
  <v-carousel cycle height="200" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <v-img src="/feebet1.jpg" height="200">
          <v-container align-center fill-height justify-center>
            <v-layout column align-start justify-center>
              <v-flex xs12 sm5 md5 pl-5 pt-1>
                <h1 class="display-1 font-weight-bold yellow--text text--accent-4">{{ slide }}</h1>
                <v-btn color="yellow accent-4" class="black--text">Получить фрибет</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      colors: [
        'blue-grey darken-4'
      ] /* ,        'black',        'black',        'red lighten-1',        'deep-purple accent-4' */,

      slides: [
        'Приветственный фрибет'
      ] /*, 'Second', 'Third', 'Fourth', 'Fifth' */
    }
  }
}
</script>
