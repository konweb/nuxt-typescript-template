<template>
  <div class="container">
    <div>
      <h1>{{ text }}: {{ httpUser.user.name }}</h1>
      <counter />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { Status } from '~/types/common/Status'
import { User } from '~/types/users/Users'

import Counter from '~/components/Counter.vue'
import { getUser } from '~/api/user'

interface HttpUser {
  status: Status
  user: User | null
}

@Component({
  components: {
    Counter
  }
})
export default class App extends Vue {
  async asyncData({ error }) {
    const resp = await getUser(1).catch(() => {
      error({ statusCode: 404, message: 'ページが見つかりません' })
    })
    return { httpUser: { status: 'stable', user: resp } }
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
