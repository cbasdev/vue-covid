import TestTitle from '../src/components/LearnJest/TestTitle.vue'
import Subtitle from '../src/components/LearnJest/Subtitle.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('TestTitle', () => {
  // Comprobar si renderiza el componente
  it('it renders the component', () => {
    const wrapper = shallowMount(TestTitle)
    expect(wrapper.html()).toMatchSnapshot()
  })

  // Comprobar si un componente contiene el dato title
  it('Should mount the component and contain title', () => {
    const title = ''
    const testTitle = mount(TestTitle, {
      propsData: {
        title: title,
      },
    })
    expect(testTitle.text()).toContain(title)
  })

  //componentes dentro de otros
  it('it renders the right', () => {
    // arrange
    const wrapper = shallowMount(TestTitle)
    const subtitle = wrapper.findComponent(Subtitle)

    // assert
    expect(subtitle.exists()).toBe(true)
  })
})
