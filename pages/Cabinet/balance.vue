<template>
  <v-container grid-list-xl>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
    </v-layout>
    <v-flex>kvjkjvkfjvkj</v-flex>
    <v-row></v-row>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  // middleware: ['auth'],
  name: 'balance',
  components: { BreadCrumbs },
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
          text: 'баланс',
          disabled: true,
          href: ''
        }
      ]
    }
  }
}
</script>