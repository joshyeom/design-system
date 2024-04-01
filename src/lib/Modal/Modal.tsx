import React from "react"
import * as MS from "./Modal.styles"
import { Button } from "./Modal.styles"
import { useToggle } from "./useToggle"
import { RGBA } from "../../tokens/colors";

interface ModalProps{
    size: string,
    primaryColor: RGBA,
    hoverColor: RGBA,
    space: string,
    subTitle: string,
    sentence: string,
    title: string,
    children?: React.ReactNode;
}

const Modal = ({primaryColor, hoverColor, size, space, subTitle, sentence, title, ...res}: ModalProps) => {
    const [toggle, toggleState] = useToggle();

    return(
        <>
            <Button primaryColor={primaryColor} hoverColor={hoverColor} onClick={toggleState} space={space}>모달</Button>
            <MS.Back isOpened={toggle} onClick={toggleState}>
                <MS.Overlay isOpened={toggle} onClick={(e) => e.stopPropagation()}>
                    <MS.Contents>
                        <MS.Title>{title}</MS.Title>
                        <MS.CloseButton aria-label="close" onClick={toggleState}>
                            <svg width="100" height="100" viewBox="0 0 100 100">
                                <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="6"/>
                                <line x1="90" y1="10" x2="10" y2="90" stroke="black" stroke-width="6"/>
                            </svg>
                        </MS.CloseButton>
                        <MS.Body size={size} space={space}>
                            <MS.SubTitle>{subTitle}</MS.SubTitle>
                            <MS.Paragraph>
                                {sentence}
                            </MS.Paragraph>
                        </MS.Body>
                        <MS.Footer>
                            <Button onClick={toggleState} primaryColor={primaryColor} hoverColor={hoverColor} space={space} >Close</Button>
                            <Button primaryColor={primaryColor} hoverColor={hoverColor} space={space} >Secondary Action</Button>
                        </MS.Footer>
                    </MS.Contents>
                </MS.Overlay>
            </MS.Back>
        </>
    )
}

export default Modal