import type { Meta, StoryObj } from "@storybook/react";
import { Caps } from "./Caps";

const meta: Meta<typeof Caps> = {
	title: "UI/Texts/Caps",
	component: Caps,
	parameters: {
		layout: "centered",
		jest: ["Caps.test.tsx"],
	}
}

export default meta;

type Story = StoryObj<typeof Caps>;

export const Regular: Story = {
	args: {
		text: "Regular Caps",
		color: "text-darkPurple",
	},
};

export const Bold: Story = {
	args: {
		text: "Bold Caps",
		color: "text-darkPurple",
		fontType: "bold",
 	},
};