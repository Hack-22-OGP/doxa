<template>
  <div
    class="flex items-center max-w-sm p-6 mx-auto bg-white shadow-md rounded-xl space-x-4"
  >
    <form @submit.prevent="onSubmit">
      <div class="question">
        <label for="q">Question</label>
        <input
          class="my-1"
          id="q"
          type="text"
          placeholder="You poll questio here..."
          v-model="poll.title"
        />
      </div>
      <div class="options">
        <label>Answers</label>
        <div v-for="(option, _id) in poll.options" :key="option._id">
          <input
            class="my-1"
            type="text"
            :placeholder="`Options ${_id + 1}...`"
            v-model="option.title"
          />
          <a v-if="optionsCount > 2" @click="removeOption(_id)">DEL</a>
        </div>
      </div>

      <button
        @click.prevent="addOption"
        class="px-4 py-2 bg-blue-200 rounded-lg"
      >
        Add option
      </button>

      <button type="submit" class="rounded-lg py-2 px-4 bg-blue-200">
        Create
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poll: {
        title: '',
        options: [
          { _id: 1, title: '' },
          { _id: 2, title: '' },
        ],
      },
      optionsCount: 2,
    }
  },
  methods: {
    addOption() {
      this.optionsCount++

      this.poll.options.push({ _id: this.optionsCount, title: '' })
    },
    removeOption(id) {
      this.optionsCount--

      this.poll.options.splice(id, 1)
    },
    async onSubmit() {
      const poll = await this.$axios.$post('poll', { ...this.poll })

      if (poll.response && poll.response.id) {
        this.$router.push({
          path: `poll/${poll.response.id}`,
        })
      }
    },
  },
}
</script>
