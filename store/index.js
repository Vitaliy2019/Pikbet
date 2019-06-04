export const state = () => ({
  sidebar: false,
  login: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  viewLogin (state) {
    state.login = !state.login
  }
}
