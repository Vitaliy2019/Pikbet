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
            placeholder="Выберите страну"
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
            @change="changeCompetitions"
            placeholder="Выберите соревнование"
          ></v-select>
        </v-flex>

        <v-flex d-flex xs12 sm6 md3>
          <v-select
            color="white"
            :items="itemsPeriod"
            item-text="title"
            item-value="value"
            v-model="selectedPeriod"
            label="Период"
            placeholder="Выберите период"
            @change="changePeriod"
          ></v-select>
        </v-flex>
      </v-layout>
    </v-layout>
    <list-prognoz
      @newPrognoz="newPrognoz"
      :selectedCountry="selectedCountry"
      :selectedCompetitions="selectedCompetitions"
    ></list-prognoz>
    <new-prognoz
      v-if="visiblePrognoz"
      :visiblePrognoz="visiblePrognoz"
      :valueOdds="valueOdds"
    ></new-prognoz>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import ListPrognoz from '~/components/Page/Cabinet/listPrognozElUI'
import NewPrognoz from '~/components/Page/Cabinet/newPrognoz'

export default {
  middleware: ['auth'],
  components: { BreadCrumbs, ListPrognoz, NewPrognoz },
  data () {
    return {
      valueOdds: null,
      visiblePrognoz: false,
      valuePeriod: '0',
      formatDate: {
        format: 'dd.MM.yyyy hh:mm',
        time: new Date(), // Время или строка(eg:'2017-12-12'),
        type: 'fmt',
        autoUpdate: false
      },
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
        this.$store.dispatch('addPrognoz/setSelectedCompetitions', newValue)
        this.selectedPeriod = null
      }
    },
    selectedCountry: {
      get () {
        return this.$store.getters['addPrognoz/getSelectedCountry']
      },
      async set (newValue) {
        await this.$store.dispatch('addPrognoz/setSelectedCountry', newValue)
        await this.$store.dispatch('addPrognoz/getValueCompetitions')
        this.selectedPeriod = null
      }
    },
    selectedPeriod: {
      get () {
        return this.$store.getters['addPrognoz/getSelectedPeriod']
      },
      set (newValue) {
        this.$store.dispatch('addPrognoz/setSelectedPeriod', newValue)
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
  created () {
    this.selectedCountry = null
    this.selectedCompetitions = null
  },
  methods: {
    newPrognoz (val) {
      debugger
      this.valueOdds = {
        odds: val.odds,
        nameOdds: val.nameOdds
      }
      this.visiblePrognoz = true
    },
    async changeCountry () {
      // // debugger; // eslint-disable-line
      await this.$store.dispatch(
        'addPrognoz/setSelectedCountry',
        this.selectedCountry
      )
    },
    async changeCompetitions () {
      await this.$store.dispatch(
        'addPrognoz/setSelectedCompetitions',
        this.selectedCompetitions
      )
    },
    async changePeriod () {
      await this.$store.dispatch(
        'addPrognoz/setSelectedPeriod',
        this.selectedPeriod
      )
    }
  }
}
</script>
