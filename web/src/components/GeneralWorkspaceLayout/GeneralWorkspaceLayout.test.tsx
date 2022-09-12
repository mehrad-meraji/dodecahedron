import { render } from '@redwoodjs/testing/web'

import GeneralWorkspaceLayout from './GeneralWorkspaceLayout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GeneralWorkspaceLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeneralWorkspaceLayout />)
    }).not.toThrow()
  })
})
