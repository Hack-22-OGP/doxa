<template>
  <PollCreate v-if="!this.id" />
  <PollVote v-else />
</template>

<script>
import PollCreate from '@/components/PollCreate.vue'
import PollVote from '@/components/PollVote.vue'

export default {
  components: { PollCreate, PollVote },
  async asyncData({ params }) {
    return { id: params.id }
  },
}
</script>
