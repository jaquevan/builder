import {useState} from "react";
import styled from "styled-components"

// simple styled component that contains our entire component
const StyledDiv = styled.div`
//needs to be centered and 20% + vertical
    
`

// our input styled component
const StyledInput = styled.input`
    background: green;
    color: white;
`
// room for more styled components

export default function BooleanInput(){

    // [ , ] = useState();

    function handleClick(){
    }

    return(
        <StyledDiv>
            <StyledInput placeholder="Enter Text Here"></StyledInput>
            <button>Hello</button>
        </StyledDiv>
    )
}