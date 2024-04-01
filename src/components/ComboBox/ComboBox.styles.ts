import styled from "styled-components";
interface isClosedProps {
    isClosed: boolean
}

export const BoxRoot = styled.section`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Positioner = styled.section`
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Label = styled.label`
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25rem;
`

export const Control = styled.div`
    position: relative;
    z-index: 10;
`

export const Input = styled.input<{focusColor: string}>`
    width: 100%;
    height: 38px;
    padding: 0 12px;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    outline: none;
    &:focus{
        outline: ${({focusColor}) => `2px solid ${focusColor}`};
        outline-offset: -1px;
        box-shadow: 0 0 0 1px red;
    }
`

export const ToggleButton = styled.button<isClosedProps>`
    display: flex;
    border: none;
    flex-direction: column;
    background-color: transparent;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: ${({isClosed}) => isClosed ? "translateY(-50%) rotate(0deg)" : "translateY(-50%) rotate(180deg)"};
    cursor: pointer;
    transition: 0.2s ease-in-out;
`



export const ItemBox = styled.div<{backgroundColor: string} & isClosedProps>`
    width: 100%;
    position: absolute;
    top:  ${({isClosed}) => isClosed ? "40%" : "100%"};
    display: flex;
    flex-direction: column;
    opacity: ${({isClosed}) => isClosed ? "0" : "1"};
    transform-origin: top;
    transition: opacity 0.15s ease-in-out, top 0.2s ease-in-out;
    z-index: ${({isClosed}) => isClosed ? "-1" : "0"};
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: 0 0 5px 5px;
`

export const ItemCategory = styled.span`
    font-weight: bold;
    padding: 12px;
    color: white;
`

export const ItemList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Item = styled.li<{itemValue: boolean, backgroundColor: string, hoverColor: string}>`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({backgroundColor}) => backgroundColor};
    &:hover{
        background-color: 
        ${({itemValue, backgroundColor, hoverColor}) => 
        itemValue ? hoverColor : backgroundColor
    };
    }
    transition: 0.1s ease-in-out;
    border-radius: 5px;
    color: ${({itemValue}) => itemValue ? "white" : "gray"};
    cursor: ${({itemValue}) => itemValue ? "pointer" : "not-allowed"};
`
