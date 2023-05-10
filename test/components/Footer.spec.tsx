/**
@jest-environment jsdom
*/
import { render } from '@testing-library/react'
import { Footer } from '../../src/components/footer'

describe('testing', () => {
  it('if Footer component is correctly rendered', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
