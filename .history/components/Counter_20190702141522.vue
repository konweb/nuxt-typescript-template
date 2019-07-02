<template>
  <div>
    <p>count: {{ count }}</p>
    <button @click="increment">
      add
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Counter extends Vue {
  count = 0

  increment() {
    this.count++
  }
}
</script>

<style></style>
