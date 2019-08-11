<template>
  <v-carousel height="200" cycle show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="200">
        <v-img :src="slide.img" height="200">
          <v-container align-center fill-height justify-center>
            <v-layout column align-start justify-center>
              <v-flex xs12 sm5 md5 pb-3 pl-5 align-center justify-center>
                <h1 class="body-1 font-weight-regular white--text text--accent-4">{{ slide.title }}</h1>
                <h2
                  class="body-2 font-weight-light yellow--text text--accent-4 pt-2"
                >{{ slide.context }}</h2>
                <br>
                <v-btn small outline color="white" class="black--text">Подробнее</v-btn>
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
        {
          title: 'Стань успешным каппером',
          context: 'Регистрируйся на сайте и зарабатывай на своих прогнозах',
          img: '/banner1.jpg'
        },
        {
          title: 'Следи за успешными капперами',
          context: 'Повторяй ставки и выигрывай вместе с ними',
          img: '/banner2.jpg'
        }
      ]
    }
  }
}
</script>
