export const strict = false
export const state = () => ({
  sidebar: false,
  login: false,
  formThead: []
})

export const mutations = {
  SET_FORMTHEAD (state, sts) {
    state.formThead = sts
  },
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  viewLogin (state) {
    state.login = !state.login
  }
}

export const getters = {
  getApiCountries: state => state.ApiCountries,

  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  }
}
