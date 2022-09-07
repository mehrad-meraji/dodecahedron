import { render } from '@redwoodjs/testing/web'

import TopHeader from './TopHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopHeader />)
    }).not.toThrow()
  })
})
