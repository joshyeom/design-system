// Button.stories.tsx 파일
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ComboBox from "./ComboBox"
import { colors } from "../../tokens/colors";

const backgroundColorOptions = {
  "blue": colors.blue[400],
  "green": colors.green[400],
  "purple": colors.purple[400],
  "pink": colors.pink[400],
};

const hoverColorOptions = {
  "blue": colors.blue[700],
  "green": colors.green[700],
  "purple": colors.purple[700],
  "pink": colors.pink[700],
}


const meta: Meta<typeof ComboBox> = {
    title: "Components/ComboBox",
    component: ComboBox,
    parameters: {
      layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
    backgroundColor: {
        description: "`backgroundColor`는 버튼의 색상을 설정합니다.",
        options:  Object.keys(colors),
        mapping: backgroundColorOptions,
        defaultValue: "blue",
        control: {type: "select"}
      },
      hoverColor:{
        description: "`hoverColor`는 버튼의 호버 색상을 설정합니다.",
        options: Object.keys(colors),
        mapping: hoverColorOptions,
        defaultValue: "blue",
        control: {type: "select"}
      },
    },
  }

export default meta
type Story = StoryObj<typeof meta>;

export const Reference: Story = {
  args:{
    backgroundColor: colors.blue[400],
    hoverColor: colors.blue[700],
    },
  render: (args) => {
    return(
      <ComboBox backgroundColor={args.backgroundColor} hoverColor={args.hoverColor}></ComboBox>
    )
  }
}
