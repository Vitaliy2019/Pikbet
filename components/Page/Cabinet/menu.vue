<template>
  <div class="text-xs-center">
    <v-btn round color="yellow darken-4" dark>
      <v-icon left>note_add</v-icon>добавить прогноз
    </v-btn>
    <v-btn round color="yellow darken-4" dark>прогнозы</v-btn>
    <v-btn round color="yellow darken-4" dark>платные прогнозы</v-btn>
    <v-btn round color="yellow darken-4" dark>оплата</v-btn>
    <v-btn round color="yellow darken-4" dark>личные данные</v-btn>
    <v-btn round color="yellow darken-4" dark>
      Баланс:
      <v-icon>euro_symbol</v-icon>7 500
    </v-btn>
  </div>
</template>
<script>
export default {
  nane: 'cabinet-menu',
  data () {
    return {}
  }
}
</script>

