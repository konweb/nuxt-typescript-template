<template>
  <div class="container">
    <div>
      <h1>{{ text }}</h1>
      <counter />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { Status } from '~/models/common/Status'
import { User } from '~/models/users/Users'

import Counter from '~/components/Counter.vue'
import UserApiSercive from '~/services/UserApiSercive'

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
  asyncData({ error }) {
    return UserApiSercive.getUser(1)
      .then((resp) => {
        return { httpUser: resp }
      })
      .catch(() => {
        error({ statusCode: 404, message: 'ページが見つかりません' })
      })
  }

  httpUser: HttpUser = {
    status: '',
    user: null
  }

  text = 'Hello'

  mounted() {
    console.log(this)
  }
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
