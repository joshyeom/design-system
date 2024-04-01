import React, { useRef, useState } from "react"
import * as CS from "./ComboBox.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useToggle } from "./useToggle"
import { ColorShade } from "../../tokens/colors"

interface ItemProps{
    name: string
    value: boolean
}

interface ComboBoxProps{
    placeholder: string | null
    items: ItemProps[]
    color: ColorShade
}


const ComboBox = ({placeholder, items, color}: ComboBoxProps) => {
    const [toggle, toggleState] = useToggle()
    const [inputValue, setInputValue] = useState<string>("")
    const [filteredItems, setFilteredItems] = useState<ItemProps[]>(items)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(toggle === true){
            toggleState()
        }
        const searchQuery = e.target.value;
        setInputValue(searchQuery)
        let newFilteredItems: ItemProps[] = [];

        items.forEach(v => {
            if (v.name.includes(searchQuery)) {
                newFilteredItems.push(v);
            }
        });
        setFilteredItems(newFilteredItems.length > 0 ? newFilteredItems : items);
    }

    const itemPickHandler = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        const targetText = target.innerText; 
        setInputValue(targetText);
        toggleState()
    };

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        if(!inputRef.current){
            return
        }
        toggleState()
    }



    return (
        <CS.BoxRoot>
            <CS.Positioner>
                <CS.Label>점메추</CS.Label>
                <CS.Control>
                    <CS.Input onFocus={toggleState} 
                        value={inputValue}
                        onChange={changeHandler}
                        focusColor={color[500]}
                        ref={inputRef}
                        />
                    <CS.ToggleButton onClick={clickHandler} isClosed={toggle}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </CS.ToggleButton>
                </CS.Control>
                <CS.ItemBox isClosed={toggle} backgroundColor={color[200]}>
                    {items ? 
                        <CS.ItemCategory>점심</CS.ItemCategory>
                    : null}
                    <CS.ItemList>
                        {filteredItems ? filteredItems.map(item => 
                            (<CS.Item key={item.name} itemValue={item.value} onClick={itemPickHandler} backgroundColor={color[400]} hoverColor={color[700]}>{item.name}</CS.Item>)
                        ) : null}
                    </CS.ItemList>
                </CS.ItemBox>
            </CS.Positioner>
        </CS.BoxRoot>
    )
}

export default ComboBox