<template>
  <div class="container">
    <div>
      <h1>{{ text }}</h1>
      <counter />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Counter from '~/components/Counter.vue'

console.log(request, PATH)

@Component({
  components: {
    Counter
  }
})
export default class App extends Vue {
  text = 'Hello'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
