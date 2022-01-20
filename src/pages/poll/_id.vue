<template>
  <div
    class="flex items-center max-w-sm p-6 mx-auto bg-white shadow-md rounded-xl space-x-4"
  >
    <form v-if="!voted" @submit.prevent="onSubmit">
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

    <div v-else>
      <div v-for="(option, id) in poll.options" :key="id">
        <span class="font-bold">{{ option.title }}</span> vote:
        <span class="font-bold">{{ option.voteCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      voted: false,
      selection: null,
      poll: {},
    }
  },
  async created() {
    await this._refreshPage()
  },
  methods: {
    async _refreshPage() {
      this.$axios.setToken('NRIC_HERE', 'Bearer')

      await this._checkVote()
      await this._getPoll()
    },
    async _getPoll() {
      const poll = await this.$axios.$get(`poll/${this.$route.params.id}`)

      if (poll.response && poll.response.id) {
        this.poll = poll.response
      }
    },
    async _checkVote() {
      const voted = await this.$axios.$get(
        `poll/${this.$route.params.id}/check-vote`
      )

      if (voted.response && voted.response.status) {
        this.voted = true
      }
    },
    async onSubmit() {
      const poll = await this.$axios.$post(`poll/${this.poll.id}/vote`, {
        optionId: this.selection,
      })

      if (poll.response && poll.response.id) {
        await this._refreshPage()
      }
    },
  },
}
</script>
