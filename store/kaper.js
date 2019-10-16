export const state = () => ({
  kaper: {
    Id: 0,
    Login: '',
    Avatar: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
    City: '',
    Pol: '',
    Family: '',
    Fnme: '',
    Email: '',
    Tel: '',
    N_yandex_dengi: '',
    Pasword: '',
    Score: 0,
    Rating: 1,
    Count_stavok: 0,
    Dodhod: 0,
    Prohod: 0,
    Sr_koeff: 0,
    Roi: 0,
    Vyigreshey: 0,
    Vozvratov: 0,
    Proigreshey: 0
  },
  prOperation: 'ok',
  dialogForm: false,
  prGetList: false
})

export const mutations = {
  SET_KAPER_AVTATR (state, sts) {
    state.kaper.Avatar = sts
  },
  SET_PR_GETLIST (state, sts) {
    state.prGetList = sts
  },
  RESET (state) {
    state.kaper.Id = 0
    state.kaper.Login = ''
    state.kaper.Avatar = 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    state.kaper.City = ''
    state.kaper.Pol = ''
    state.kaper.Family = ''
    state.kaper.Fnme = ''
    state.kaper.Email = ''
    state.kaper.Tel = ''
    state.kaper.N_yandex_dengi = ''
    state.kaper.Pasword = ''
    state.kaper.Score = 0
    state.kaper.Rating = 1
    state.kaper.Count_stavok = 0
    state.kaper.Dodhod = 0
    state.kaper.Prohod = 0
    state.kaper.Sr_koeff = 0
    state.kaper.Roi = 0
    state.kaper.Vyigreshey = 0
    state.kaper.Vozvratov = 0
    state.kaper.Proigreshey = 0
  },
  SET_KAPER (state, sts) {
    state.kaper = sts
  },
  SET_PR_OPERATION (state, sts) {
    state.prOperation = sts
  },
  SET_DIALOG_FORM (state, sts) {
    state.dialogForm = sts
  },
  SET_IMAGE_DATA (state, sts) {
    state.kaper.Avatar = sts
  }
}
export const actions = {
  setKaperAvatar ({
    commit
  }, sts) {
    commit('SET_KAPER_AVTATR', sts)
  },
  async initKaper ({
    commit
  }, data) {
    debugger // eslint-disable-line
    const {
      kaper
    } = await this.$axios.$get(
      `/api/Kapers/${data}`
    )
    commit('SET_KAPER', kaper)
  },
  setPrGetList ({
    commit
  }, data) {
    commit('SET_PR_GETLIST', data)
  },
  async setKapper ({
    commit
  }, data) {
    const {
      rc
    } = await this.$axios.$post('/api/Kapers', data)
    if (rc === 'ok') {
      commit('SET_KAPER', data)
      commit('SET_PR_OPERATION', 'ok')
    } else {
      commit('SET_PR_OPERATION', 'no')
    }
  },
  setImageData ({
    commit
  }, data) {
    commit('SET_IMAGE_DATA', data)
  }
}
export const getters = {
  getKaperAvatar: (state) => state.kaper.Avatar,
  getKaper (state) {
    return state.kaper
  },
  getDialogForm (state) {
    return state.dialogForm
  },
  getPrOperation (state) {
    return state.prOperation
  },
  getPrGetList (state) {
    return state.prGetList
  },
  getImageData (state) {
    return state.kaper.Avatar
  }
}
