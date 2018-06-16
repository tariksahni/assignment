import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { withRouter } from 'react-router'
import renderer from 'react-test-renderer'
import configureStore from '../../../Store'
import { DashBoard } from '../../'

const store = configureStore()

configure({ adapter: new Adapter() })

describe(DashBoard, () => {
  const Component = shallow(<Provider store={store}><DashBoard /></Provider>)
  const WrappedComponent = withRouter(Component)
  it('renders and matches our snapshot', () => {
    const Component = <Provider store={store}><DashBoard /></Provider>
    const WrappedComponent = withRouter(Component)
    const component = renderer.create(WrappedComponent)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('contains the supplied name', () => {
    expect(WrappedComponent.text()).toContain('<Connect(DashBoard) />')
  })
})
