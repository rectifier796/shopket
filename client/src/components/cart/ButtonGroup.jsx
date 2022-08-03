

import { Button,ButtonGroup,styled } from "@mui/material";

import { useState } from "react";

const Component=styled(ButtonGroup)`
margin-top:30px;
`
const StyledButton=styled(Button)`
border-radius:50%;
`


const GroupedButton=()=>{



    const [quantity,setQuantity]=useState(1);

    const decrement=()=>{
        setQuantity(quantity-1);
    }
    const increment=()=>{
        setQuantity(quantity+1);
    }

    return(
        <Component>
            <StyledButton onClick={()=>decrement()}>-</StyledButton>
            <Button disabled>{quantity}</Button>
            <StyledButton onClick={()=>increment()}>+</StyledButton>
        </Component>
    )
}

export default GroupedButton;