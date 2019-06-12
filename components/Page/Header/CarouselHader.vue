<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <v-img :src="slide.img" height="100%">
          <v-container align-center fill-height justify-center>
            <v-layout column align-start justify-center>
              <v-flex xs12 sm5 md5 pl-1>
                <h1
                  class="hidden-md-and-down display-4 font-weight-regular white--text text--accent-4"
                >{{ slide.title }}</h1>
                <h2
                  class="hidden-md-and-down display-3 font-weight-light yellow--text text--accent-4 pt-4"
                >{{ slide.context }}</h2>

                <h1
                  class="hidden-lg-and-up display-2 font-weight-regular white--text text--accent-4"
                >{{ slide.title }}</h1>
                <h2
                  class="hidden-lg-and-up display-1 font-weight-light yellow--text text--accent-4 pt-4"
                >{{ slide.context }}</h2>

                <v-btn outline color="white" class="black--text">Получить фрибет</v-btn>
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
          context: 'Регистрируйся на сайте и зарабатывай на своих прогнзах',
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
