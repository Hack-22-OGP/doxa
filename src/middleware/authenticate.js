export default function ({ app, route, redirect }) {
  const u = app.$cookies.get('u')

  if (!u) {
    return redirect(
      `${process.env.apiURL}/auth?target=${process.env.baseURL}${route.fullPath}`
    )
  }
}
