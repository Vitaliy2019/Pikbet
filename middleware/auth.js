export default function ({
  store,
  redirect
}) {
  // use store.getters.isAuth ...

  if (!store.getters.isAuthenticated) {
    console.log('store.getters.isAuthenticated=', store.getters.isAuthenticated)
    return redirect('/login')
  }
}
