import {useState} from "react";
import styled from "styled-components"

// simple styled component that contains our entire component
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;

`
const StyledButton = styled.button `
    background-color: orange;
    padding: 2%;
    
`
// our input styled component

const StyledInput = styled.input `
    padding: 3%;
    background-color: blue;
    color: white;
`

// room for more styled components

export default function BooleanInput(){

    const [bool, setBool ] = useState(true);

    function handleClick(){
        setBool(!bool)
        console.log(bool)
    }

    return(
        <StyledDiv>
            <StyledInput placeholder="Enter Text1 Here"></StyledInput>
            <StyledInput placeholder="Enter Text2 Here"></StyledInput>
            <StyledButton onClick={handleClick}>Hello</StyledButton>
        </StyledDiv>
    )
}