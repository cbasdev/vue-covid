import TestTitle from '../src/components/LearnJest/TestTitle.vue'
import { mount } from '@vue/test-utils'

it('Should mount the component and contain title', () => {
  const title = 'I am a title'
  const testTitle = mount(TestTitle, {
    propsData: {
      title: title,
    },
  })
  expect(testTitle.text()).toContain(title)
})
