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
import { namespace } from 'vuex-class'

import { Status } from '~/types/common/Status'
import { User } from '~/types/users/Users'

import Counter from '~/components/Counter.vue'

import { name as userModuleName } from '~/store/modules/user'

const UserModule = namespace(userModuleName)

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
  @UserModule.Getter('name') getterName
  @UserModule.Action('setName') actionSetName

  async asyncData({ error, app }) {
    const resp = await app.$userApi.get(1).catch(() => {
      error({ statusCode: 404, message: 'ページが見つかりません' })
    })
    return { httpUser: { status: 'stable', user: resp } }
  }

  text = 'Hello'

  created() {
    this.actionSetName('tom').then(() => {
      console.log(this.getterName)
    })
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
