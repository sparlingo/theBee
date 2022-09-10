import { render } from '@redwoodjs/testing/web'

import ChakraLayout from './ChakraLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChakraLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChakraLayout />)
    }).not.toThrow()
  })
})
