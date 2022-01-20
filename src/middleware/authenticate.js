export default function ({ route, store, redirect }) {
  if (!store.state.user) {
    return redirect(process.env.apiURL)
  }
}
