const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })

describe('Testing', () => {
  beforeEach(() => {
    jest.setTimeout(10000)
  })

  it('if Top page renders correctly', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    const image = await page.screenshot({ fullPage: true })

    expect(image).toMatchImageSnapshot()
  })
})
