import { Meta, StoryObj } from "@storybook/react";
import { Small } from "./Small";

const meta: Meta<typeof Small> = {
    title: "UI/Texts/Small",
    component: Small,
    parameters: {
        layout: "centered",
        jest: ["Small.test.tsx"],
    }
};

export default meta;

type Story = StoryObj<typeof Small>;

export const Regular: Story = {
    args: {
        text: "Regular Small Text",
        color: "text-darkPurple",
    }
};

export const Bold: Story = {
    args: {
        text: "Bold Small Text",
        color: "text-darkPurple",
        fontType: "bold",
    }
};