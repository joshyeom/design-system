import React, {useId} from "react"
import * as SC from "./InputBox.styles"
import { WholeBox } from "./InputBox.types"

const InputBox: React.FC<WholeBox> = ({
    size,
    disabled,
    children,
    ...res
}) => {


    return(
        <form method="get" action="" style={{display: "inline"}}>
            <SC.InputRow size={size}>
                <SC.InputBox 
                    id={size}
                    type="text"
                    size={size}
                    disabled={disabled}
                    {...res}
                ></SC.InputBox>
                <SC.Label htmlFor={size} size={size}>{children}</SC.Label>
            </SC.InputRow>
        </form>
    )
}

export default InputBox