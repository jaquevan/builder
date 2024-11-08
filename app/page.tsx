"use client"

import styled from "styled-components"
import {Container, Typography} from '@mui/material';
import Drawer from "@/app/components/SideNavShelf"

// header text styling
const StyledText = styled.h1`
    text-align: center;
    background-color: #fff600;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2% 0;
    border: 1px solid #fff600;
    border-radius: 15px;
    
`;

const StyledSubText = styled(Typography)`
    //centers the text in the div below the header
    text-align: center;
    padding: 0;
    margin: 0 auto;
    
`;

const StyledDiv = styled.div`
    
    border: 1px solid black;
    border-radius: 10px;
    padding: 5%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 70%;
    
    
`;

const QuickNavDiv = styled.div`

    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2%;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
`;

export default function Home() {
    return (
        <Container>

            {/*Big Header Text For Animations and Logo*/}
            <StyledText>
                <Typography variant="h4">Builder</Typography>
            </StyledText>



            <StyledContainer>

            <QuickNavDiv>
                {/*Quick Nav Button that opens a bookshelf*/}
                <Drawer/>
            </QuickNavDiv>


            <StyledDiv>
                <StyledSubText variant="caption">Text for Main Content or Alternating cards</StyledSubText>
            </StyledDiv>

            </StyledContainer>




        </Container>

    );
}