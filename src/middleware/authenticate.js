export default function ({ app, route, redirect }) {
  const u = app.$cookies.get('u')

  if (!u) {
    return redirect(
      `${app.$config.apiURL}/auth?target=${app.$config.baseURL}${route.fullPath}`
    )
  }
}
