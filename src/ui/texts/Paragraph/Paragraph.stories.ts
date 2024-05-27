import type {Meta, StoryObj} from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
    title: "UI/Texts/Paragraphs",
    component: Paragraph,
    parameters: {
        layout: "centered",
        jest: ["Paragraph.test.tsx"],
    }
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Regular: Story = {
    args: {
        text: "Regular Paragraph",
        color: "text-darkPurple",
    },
};

export const Bold: Story = {
    args: {
        text: "Bold Paragraph",
        color: "text-brightPurple",
        fontType: "bold",
    },
};