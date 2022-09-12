import { render } from '@redwoodjs/testing/web'

import UserButton from './UserButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserButton />)
    }).not.toThrow()
  })
})
