import styled from "styled-components"
import { RGBA } from "../../tokens/colors";

export const Back = styled.div<{isOpened: boolean}>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    opacity: ${({ isOpened }) => isOpened ? 1 : 0};
    visibility: ${({ isOpened }) => isOpened ? 'visible' : 'hidden'};
    transition: 0.2s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Overlay = styled.div<{isOpened: boolean}>`
    width: 45%;
    height: 55%;
    background-color: white;
    border-radius: 10px;
    transform: ${({ isOpened }) => (isOpened ? 'scale(1)' : 'scale(0.95)')};
    transition: 0.2s ease-in-out;
`

export const Contents = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 20px;
    padding: 16px 24px;
`

export const CloseButton = styled.button`
    position: absolute;
    border-radius: 5px;
    top: 0.75rem;
    right: 0.75rem;
    background-color: transparent;
    border: none 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s ease-in-out;
    &:hover{
        background-color: rgba(0,0,0,0.05);
    }
`

export const Body = styled.section<{size: string, space: string}>`
    display: block;
    flex-grow: 3;
    padding: ${({space}) => space};
    font-size: ${({size}) => size};
`

export const SubTitle = styled.p`
    margin-bottom: 1rem;
    font-weight: 600;
`


export const Paragraph = styled.p`
    unicode-bidi: isolate;
    line-height: 24px;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    padding: 16px 24px;
`

interface ButtonProps{
    primaryColor: RGBA; 
    hoverColor: RGBA;
    space: string;
}

export const Button = styled.button<ButtonProps>`
    padding: ${({space}) => space};
    border-radius: 10px;
    border: none;
    color: white;
    transition: 0.1s ease-in-out;
    background-color: ${({primaryColor}) => primaryColor};
    &:hover{
        background-color: ${({hoverColor}) => hoverColor};
    }
`