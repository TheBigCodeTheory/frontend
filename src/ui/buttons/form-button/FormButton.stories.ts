import type { Meta, StoryObj } from '@storybook/react'
import { FormButton } from './FormButton'

const meta: Meta<typeof FormButton> = {
  title: 'UI/Buttons/FormButton',
  component: FormButton,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof FormButton>

export const Primary: Story = {
  args: {
    children: 'Form Button',
  },
  parameters: {
    jest: 'FormButton.test.tsx',
  },
}
