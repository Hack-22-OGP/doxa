<template>
  <div
    class="flex items-center max-w-sm p-6 mx-auto bg-white shadow-md rounded-xl space-x-4"
  >
    <div>
      <div v-for="(option, id) in poll.options" :key="id">
        <span class="font-bold">{{ option.title }}</span> vote:
        <span class="font-bold">{{ option.voteCount }}</span>
      </div>

      <NuxtLink :to="`/poll/${poll.id}`" class="text-blue-400"
        >Vote for this poll</NuxtLink
      >
      <br />
      <NuxtLink to="/poll" class="text-blue-400">Create a new poll</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const poll = await $axios.$get(`/poll/${route.params.id}`)

    if (poll && poll.response) {
      return { poll: poll.response }
    }
  },
}
</script>
