// import axios from '@nuxtjs/axios'
export const state = () => ({
  valueCompetitions: '',
  valueCountry: '',
  valuePeriod: 'В любое время',
  selectedCountry: '',
  selectedComprtitions: ''

})

export const mutations = {
  SET_SELECTED_COMPETITIONS (state, sts) {
    state.selectedComprtitions = sts
  },
  SET_SELECT_COUNTRY (state, sts) {
    state.selectedCountry = sts
  },
  SET_VALUE_COUNTRY (state, sts) {
    state.valueCountry = sts
  },
  SET_VALUE_COMPETITIONS (state, sts) {
    state.valueCompetitions = sts
  },
  SET_VALUE_PERIOD (state, sts) {
    state.valuePeriod = sts
  }
}
export const actions = {
  setSelectedCompetitions ({
    commit
  }, sts) {
    commit('SET_SELECTED_COMPETITIONS', sts)
  },
  setSelectedCountry ({
    commit,
    dispatch
  }, sts) {
    commit('SET_SELECT_COUNTRY', sts)
    dispatch('getValueCompetitions')
  },
  setValueCountry ({
    commit
  }, sts) {
    commit('SET_VALUE_COUNTRY', sts)
  },
  setValueCompetitions ({
    commit
  }, sts) {
    commit('SET_VALUE_COMPETITIONS', sts)
  },
  setValuePeriod ({
    commit
  }, sts) {
    commit('SET_VALUE_PERIOD', sts)
  },
  async getValueCountry ({
    commit
  }) {
    const {
      countries
    } = await this.$axios.$get('/api/Countries/getListAllVisible')

    commit('SET_VALUE_COUNTRY', countries)

    commit('SET_SELECT_COUNTRY', countries[0].country_name)
  },
  async getValueCompetitions ({
    commit,
    state
  }) {
    debugger; // eslint-disable-line
    const listQuery = {
      Page: 1,
      Limit: 1000,
      Tile: state.selectedCountry || '',
      ValueC: ''
    }
    const {
      competitions
    } = await this.$axios.$get('/api/Competitions/', {
      params: listQuery
    })
    commit('SET_VALUE_COMPETITIONS', competitions)
    commit('SET_SELECTED_COMPETITIONS', competitions[0].league_name)
  }
}

export const getters = {
  getSelectedCompetitions: state => state.selectedComprtitions,
  getSelectedCountry: state => state.selectedCountry,
  getValueCountry: state => state.valueCountry,
  getValueCompetitions: state => state.valueCompetitions,
  getPeriod: state => state.valuePeriod
}
