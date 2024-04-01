import React from "react";
import { RGBA } from "../../tokens/colors";
interface ModalProps {
    size: string;
    primaryColor: RGBA;
    hoverColor: RGBA;
    space: string;
    subTitle: string;
    sentence: string;
    title: string;
    children?: React.ReactNode;
}
declare const Modal: ({ primaryColor, hoverColor, size, space, subTitle, sentence, title, ...res }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
