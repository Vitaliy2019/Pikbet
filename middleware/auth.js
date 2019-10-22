export default function ({
  store,
  redirect
}) {
  // use store.getters.isAuth ...

  if (!store.getters.isAuthenticated) {
    return redirect('/login')
  }
}
