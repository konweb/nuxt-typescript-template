<template>
  <div>count: {{ count }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Counter extends Vue {
  count = 0
}
</script>

<style></style>
