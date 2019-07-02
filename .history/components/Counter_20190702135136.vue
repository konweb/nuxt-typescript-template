<template>
  <div>
    <p>count: {{ count }}</p>
    <button @on="increment">
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
    console.log('increment')
  }
}
</script>

<style></style>
