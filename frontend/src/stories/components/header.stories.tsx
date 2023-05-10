import { Header } from '../../components/header'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'components/header',
  component: Header,
} as Meta<typeof Header>

const mockHandler = () => {
  return
}

const Template: Story<typeof Header> = () => (
  <Header handler={mockHandler} mode={false} />
)
export const Default = Template.bind({})
