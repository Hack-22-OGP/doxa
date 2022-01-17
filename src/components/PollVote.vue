<template>
  <div
    class="flex items-center max-w-sm p-6 mx-auto bg-white shadow-md rounded-xl space-x-4"
  >
    <form @submit.prevent="onSubmit">
      <h1>{{ poll.title }}</h1>

      <div v-for="(option, id) in poll.options" :key="id">
        <label
          ><input
            class="my-1"
            type="radio"
            v-model="selection"
            :value="option.id"
          />
          {{ option.title }}</label
        >
      </div>

      <button type="submit" class="rounded-lg py-2 px-4 bg-blue-200">
        Vote
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: null,
      poll: {},
    }
  },
  async mounted() {
    const poll = await this.$axios.$get(`poll/${this.$route.params.id}`)

    if (poll.response && poll.response.id) {
      this.poll = poll.response
    }
  },
  methods: {
    async onSubmit() {
      this.$axios.setToken('NRIC_HERE', 'Bearer')

      const poll = await this.$axios.$post(
        `poll/${this.poll.id}/vote/${this.selection}`
      )

      if (poll.response && poll.response.id) {
        this.$router.push({
          path: `/poll/${poll.response.id}`,
        })
      }
    },
  },
}
</script>
