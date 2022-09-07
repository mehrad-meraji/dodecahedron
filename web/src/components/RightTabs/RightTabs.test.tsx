import { render } from '@redwoodjs/testing/web'

import RightTabs from './RightTabs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RightTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RightTabs />)
    }).not.toThrow()
  })
})
