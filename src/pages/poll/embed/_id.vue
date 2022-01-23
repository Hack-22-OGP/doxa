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
  head() {
    return {
      title: this.siteTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.siteContent,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.siteUrl,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.siteTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.siteContent,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://image.shutterstock.com/shutterstock/photos/1188115291/display_1500/stock-vector-cute-green-frog-cartoon-character-isolated-on-white-background-1188115291.jpg',
        },
      ],
    }
  },
  computed: {
    siteTitle: function () {
      return `${this.poll.title} - Doxa`
    },
    siteContent: function () {
      return this.poll.options
        .map((poll) => {
          return `${poll.title} (${poll.voteCount})`
        })
        .join('\n ')
    },
    siteUrl: function () {
      return `${this.$config.baseURL}/poll/${this.$route.params.id}`
    },
  },
  async asyncData({ $axios, route }) {
    const poll = await $axios.$get(`/poll/${route.params.id}`)

    if (poll && poll.response) {
      return { poll: poll.response }
    }
  },
}
</script>
