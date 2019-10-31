<template>
  <v-container grid-list-xl>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-layout row wrap align-center justify-center>
        <v-flex d-flex xs12 sm6 md3>
          <v-select
            color="white"
            item-text="country_name"
            item-value="country_name"
            :items="itemsCountry"
            v-model="selectedCountry"
            label="Страна"
            @change="changeCountry"
          ></v-select>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-select
            color="white"
            :items="itemsCompetitions"
            v-model="selectedCompetitions"
            item-text="league_name"
            item-value="league_name"
            label="Соревнование"
          ></v-select>
        </v-flex>

        <v-flex d-flex xs12 sm6 md3>
          <v-select
            color="white"
            :items="itemsPeriod"
            item-text="title"
            item-value="value"
            v-model="valuePeriod"
            label="Период"
          ></v-select>
        </v-flex>
      </v-layout>
    </v-layout>
    <list-prognoz></list-prognoz>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import ListPrognoz from '~/components/Page/Cabinet/listPrognoz'
export default {
  middleware: ['auth'],
  components: { BreadCrumbs, ListPrognoz },
  data () {
    return {
      valuePeriod: '0',
      itemsPeriod: [
        { title: 'В любое время', value: 0 },
        { title: 'В ближайшие 6 часов', value: 6 },
        { title: 'В ближайшие 12 часов', value: 12 },
        { title: 'В ближайшие сутки', value: 24 }
      ],
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
    selectedCompetitions: {
      get () {
        return this.$store.getters['addPrognoz/getSelectedCompetitions']
      },
      set (newValue) {
        this.store.dispatch('addPrognoz/setSelectedCompetitions', newValue)
      }
    },
    selectedCountry: {
      get () {
        return this.$store.getters['addPrognoz/getSelectedCountry']
      },
      async set (newValue) {
        await this.$store.dispatch('addPrognoz/setSelectedCountry', newValue)
        await this.$store.dispatch('addPrognoz/getValueCompetitions')
      }
    },
    itemsCountry () {
      return this.$store.getters['addPrognoz/getValueCountry']
    },
    itemsCompetitions () {
      return this.$store.getters['addPrognoz/getValueCompetitions']
    }
  },
  async fetch ({ store }) {
    await store.dispatch('addPrognoz/getValueCountry')
    await store.dispatch('addPrognoz/getValueCompetitions')
  },

  methods: {
    changeCountry () {}
  }
}
</script>