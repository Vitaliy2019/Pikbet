// export const strict = false

import axios from 'axios'
import configEnv from '../utils/configEnv'

export const state = () => ({
  list: null,
  period: null
})

export const mutations = {
  SET_LIST (state, sts) {
    state.list = sts
  },
  SET_PERIOD (state, sts) {
    state.period = sts
  }
}

export const actions = {
  setList ({
    commit
  }, sts) {
    commit('SET_LIST', sts)
  },
  setPeriod ({
    commit
  }, sts) {
    commit('SET_PERIOD', sts)
  },
  getList ({
    commit
  }) {
    let response = axios.get(`${configEnv.urlApi}api/Client/getuser`)
    commit('SET_LIST', response.data.user)
  }
}

export const getters = {
  getList: state => state.list,
  getPeriod: state => state.period
}
