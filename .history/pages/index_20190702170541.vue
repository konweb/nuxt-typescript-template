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
import UserApiSercive from '~/services/UserApiSercive'

@Component({
  components: {
    Counter
  }
})
export default class App extends Vue {
  async asyncData() {
    console.log('asyncData')
    const resp = await UserApiSercive.getUser(1)
    console.log(resp)
    return { project: 'nuxt' }
  }

  mounted() {
    console.log('mount')
    console.log(this)
  }
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
