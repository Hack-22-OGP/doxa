export default function ({ app, route, redirect }) {
  const u = app.$cookies.get('u')

  console.log('\n🐸🐸🐸 authenticate.js cookie?', u) // >>> TO-REMOVE

  if (!u) {
    return redirect(
      `${process.env.apiURL}/auth?target=${process.env.baseURL}${route.fullPath}`
    )
  }
}
