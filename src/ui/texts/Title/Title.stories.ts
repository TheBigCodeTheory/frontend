import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "UI/Texts/Title",
  component: Title,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: {
    color: "text-darkPurple",
    text: "Default Title",
  },
  parameters: {
    jest: ["Title.test.tsx"],
  }
}