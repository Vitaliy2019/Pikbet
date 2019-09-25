<template>
  <v-carousel height="200" cycle show-arrows-on-hover hide-delimiters interval="30000">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="200">
        <v-img :src="slide.img" width="100%">
          <v-container align-center fill-height justify-center>
            <v-layout column align-start justify-center>
              <v-flex xs10 sm5 md5 class="trans">
                <h1 class="headline font-weight-thin white--text text--accent-4">{{ slide.title }}</h1>
                <h2
                  class="body-2 font-weight-thin yellow--text text--accent-4 pt-2"
                >{{ slide.context }}</h2>
                <br />
                <v-btn small outline color="white" class="black--text pr-1">Подробнее</v-btn>
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
.trans h1 {
  font-size: 4em;
}
</style>