import type { Meta, StoryObj } from '@storybook/react'
import { FormButton } from './FormButton'

const meta = {
  title: 'UI/Buttons/FormButton',
  component: FormButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'FormButton',
  },
}
