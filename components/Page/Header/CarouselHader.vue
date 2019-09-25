<template>
  <v-carousel height="300" cycle show-arrows-on-hover hide-delimiters>
    <v-carousel-item v-for="(slide, i) in slides" :key="i+'ss'">
      <v-sheet height="300">
        <v-img :src="slide.img" height="300">
          <v-container align-center fill-height justify-center>
            <v-layout column align-start justify-center>
              <v-flex xs12 sm6 md6 class="trans">
                <h1
                  class="font-weight-thin white--text text--accent-4 text-uppercase pb-3"
                >{{ slide.title }}</h1>
                <h2
                  class="title font-weight-thin white--text text--accent-4 pb-3"
                >{{ slide.context }}</h2>
                <br />
                <v-btn
                  outline
                  color="white"
                  style="border-color: yellow;
                  -webkit-border-radius: 8px; -moz-border-radius: 8px;
                  border-radius: 8px;"
                  class="black--text"
                >Подробнее</v-btn>
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
      colors: ['blue-grey darken-4'],
      slides: [
        {
          title: 'Стань успешным каппером',
          context: 'Регистрируйся на сайте и зарабатывай на своих прогнозах',
          img: '/banner1_clear.svg'
        },
        {
          title: 'Следи за успешными капперами',
          context: 'Повторяй ставки и выигрывай вместе с ними',
          img: '/banner2_clear.svg'
        }
      ]
    }
  }
}
</script>
<style scoped>
.trans {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  font-stretch: ultra-condensed;
  background-color: rgba(
    15,
    15,
    15,
    0.5
  ); /* Цвет фона и значение прозрачности */
  padding: 10px; /* Поля вокруг текста */
  color: #fff; /* Цвет текста */
}
</style>
