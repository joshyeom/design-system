// Button.stories.tsx 파일
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal"
import {colors} from "../../tokens/colors";
import { sizes } from "../../tokens/sizes";
import { space } from "../../tokens/space";

const primaryColorOptions = {
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


const spaceOptions = {
  "sm": space.sm,
  "md": space.md,
  "lg": space.lg
};


const sizeOptions = {
  "xs": sizes.xs,
  "sm": sizes.sm,
  "md": sizes.md,
  "lg": sizes.lg,
  "xl": sizes.xl,
};


const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
      layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
      primaryColor: {
        description: "`primaryColor`는 버튼의 색상을 설정합니다.",
        options:  Object.keys(colors),
        mapping: primaryColorOptions,
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
      size: {
        description: "`size`는 글자 크기를 설정합니다.",
        options: Object.keys(sizes),
        mapping: sizeOptions,
        defaultValue: "md",
        control: { type: "select" }
      },
      space: {
        description: "`space`는 padding을 설정합니다.",
        options: Object.keys(space),
        mapping: spaceOptions,
        defaultValue: "md",
        control: { type: "select" }
      },
      subTitle:{
        description: "`subTitle`은 부제목을 설정합니다.",
        control: {type: "text"}
      },
      sentence:{
        description: "`sentence`는 컨텐츠를 설정합니다.",
        control: {type: "text"}
      },
      title:{
        description: "`title`는 제목 설정합니다.",
        control: {type: "text"}
      }
    },
  }

export default meta
type Story = StoryObj<typeof meta>;

export const Reference: Story = {
  args:{
    primaryColor: colors.blue[400],
    hoverColor: colors.blue[700],
    size: sizes.sm,
    space: space.sm,
    title: "Modal Title",
    subTitle: "You can scroll the content behind the modal",
    sentence: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.",
    },
  render: (args) => {
    return(
      <Modal primaryColor={args.primaryColor} hoverColor={args.hoverColor} size={args.size} space={args.space} subTitle={args.subTitle} sentence={args.sentence} title={args.title}></Modal>
    )
  }
}
