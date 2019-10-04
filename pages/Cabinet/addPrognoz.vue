<template>
  <v-container grid-list-xl>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-layout row wrap align-center justify-center>
        <v-flex d-flex xs12 sm6 md3>
          <v-select
            color="white"
            :items="itemsCompetitions"
            v-model="valueCompetitions"
            label="Соревнование"
          ></v-select>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-select
            color="white"
            item-text="country_name"
            item-value="country_id"
            :items="itemsCountry"
            v-model="valueCountry"
            label="Страна"
          ></v-select>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-select color="white" :items="itemsPeriod" v-model="valuePeriod" label="Период"></v-select>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  middleware: ['auth'],
  components: { BreadCrumbs },
  data () {
    return {
      valueCompetitions: '',
      valueCountry: '',
      valuePeriod: 'В любое время',
      itemsPeriod: [
        'В любое время',
        'В ближайшие 6 часов',
        'В ближайшие 12 часов',
        'В ближайшие сутки'
      ],
      // itemsCountry: [],
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
  },
  computed: {
    itemsCountry () {
      return this.$store.getters['addPrognoz/getValueCountry']
    },
    itemsCompetitions () {
      return this.$store.getters['addPrognoz/getValueCompetitions']
    }
  },
  fetch ({ store }) {
    store.dispatch('addPrognoz/getValueCountry')
  }
}
</script>