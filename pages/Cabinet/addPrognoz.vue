<template>
  <v-container grid-list-xl>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'личный кабинет каппера',
          disabled: false,
          href: '/Cabinet/default'
        },
        {
          text: 'добавить прогноз',
          disabled: true,
          href: ''
        }
      ]
    }
  }
}
</script>