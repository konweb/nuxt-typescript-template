import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Counter from '../components/Counter.vue'
import Welcome from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}))

storiesOf('components', module).add('Counter', () => ({
  components: { Counter },
  template: '<counter />',
  methods: { action: linkTo('Button') }
}))
