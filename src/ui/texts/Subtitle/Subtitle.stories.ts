import type {Meta, StoryObj} from "@storybook/react";
import { Subtitle } from "./Subtitle";

const meta: Meta<typeof Subtitle> = {
    title: "UI/Texts/Subtitle",
    component: Subtitle,
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof Subtitle>;

export const Default: Story = {
    args: {
        text: "Default Subtitle",
        color: "text-darkPurple",
    },
    parameters: {
        jest: ["Subtitle.test.tsx"],
    }
};