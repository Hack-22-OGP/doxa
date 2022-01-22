<template>
  <div>
    <h1>Welcome to DOXA</h1>

    <NuxtLink to="/poll" class="text-blue-400">Create a Poll</NuxtLink>

    <hr />
    <h2>Current running polls</h2>
    <div v-for="(poll, id) in polls" :key="id">
      {{ id + 1 }}.
      <NuxtLink :to="`/poll/${poll.id}`" class="text-blue-400">{{
        poll.title
      }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    $axios.setHeader('Content-Type', 'application/json')

    const polls = await $axios.$get('/poll')

    if (polls && polls.response) {
      return { polls: polls.response }
    }
  },
}
</script>
