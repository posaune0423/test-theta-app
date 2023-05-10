import Page from '../../pages'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'pages/index',
  component: Page,
} as Meta<typeof Page>

const Template: Story<typeof Page> = () => <Page />
export const Default = Template.bind({})
