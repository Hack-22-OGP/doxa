<template>
  <PollCreate v-if="!this.id" />
  <PollVote v-else />
</template>

<script>
export default {
  async asyncData({ params }) {
    return { id: params.id }
  },
}
</script>
