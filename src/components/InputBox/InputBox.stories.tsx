import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InputBox from "./InputBox";
import { action } from "@storybook/addon-actions"

const meta :Meta<typeof InputBox>= {
  title: "Components/InputBox",
  component: InputBox,
  parameters: {
    layout: "centered",
  },
  args:{
    onSubmit: action("on-submit"),
  },
  argTypes:{
    size: {
      option: ["sm", "md", "lg"], 
      control: {type: "radio"}
    },
    disabled:{
      control: {type: "boolean"}
    },
    children:{
      control: {type: "text"}
    }
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Size: Story = {
  args:{
    onSubmit: action("on-submit"),
    children: "Input"
  },
  render: (args) => {
    return(
      <div style={{display: "flex", flexDirection: "column" ,gap: "50px"}}>
        <InputBox children={args.children} disabled={false} onSubmit={args.onSubmit} size="sm"></InputBox>
        <InputBox children={args.children} disabled={false} onSubmit={args.onSubmit} size="md"></InputBox>
        <InputBox children={args.children} disabled={false} onSubmit={args.onSubmit} size="lg"></InputBox>
      </div>
    )
  }
};

export const Disabled: Story = {
  args:{
    disabled: true,
    children: "Input"
  },
  render: (args) => {
    return(
        <InputBox children={args.children} disabled={args.disabled} onSubmit={action("on-submit")} size="md"></InputBox>
    )
  }
};
