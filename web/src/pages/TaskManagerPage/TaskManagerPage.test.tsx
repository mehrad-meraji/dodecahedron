import { render } from '@redwoodjs/testing/web'

import TaskManagerPage from './TaskManagerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TaskManagerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskManagerPage />)
    }).not.toThrow()
  })
})
