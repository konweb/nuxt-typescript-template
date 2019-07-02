<template>
  <div>count: {{ count }}</div>
  <button @on="increment">
    add
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Counter extends Vue {
  count = 0

  increment() {
    console.log('increment')
  }
}
</script>

<style></style>
