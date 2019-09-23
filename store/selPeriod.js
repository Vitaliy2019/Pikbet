// export const strict = false

import axios from 'axios'
import configEnv from '../utils/configEnv'

export const state = () => ({
  list: null,
  period: 'За все время',
  score: 0
})

export const mutations = {
  SET_SCORE (state, sts) {
    state.score = sts
  },
  SET_LIST (state, sts) {
    state.list = sts
  },
  SET_PERIOD (state, sts) {
    state.period = sts
  }
}

export const actions = {
  setSqcore ({
    commit
  }, sts) {
    commit('SET_SCORE', sts)
  },
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
  getPeriod: state => state.period,
  getScore: state => state.score
}
