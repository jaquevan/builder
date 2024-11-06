"use client"

import styled from "styled-components"
import {Container, Typography} from '@mui/material';
import BasicBreadcrumbs from "@/app/components/BreadCrumbs";
import Drawer from "@/app/components/SideNavShelf"

const StyledText = styled.h1`
    text-align: center;
    background-color: #fff600;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2% 0;
    
`;

const StyledDiv = styled.div`
    background-color: rgba(6,11,39,0.51);
    padding: 0 18.5%;
    display: flex;
    flex-direction: row;
    margin: 0 30%;
    width: 50%;
    
    
    h1 {
        text-align: center;
    }
`;

const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const QuickNavDiv = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export default function Home() {
    return (
        <Container>

            {/*Big Header Text For Animations and Logo*/}
            <StyledText>
                <Typography variant="h4">Test</Typography>
            </StyledText>
            <DivContainer>

            <QuickNavDiv>
                {/*Quick Nav Button that opens a bookshelf*/}
                <Drawer/>
            </QuickNavDiv>
            <StyledDiv>
                <h1>Text for Main Content or Alternating cards</h1>
            </StyledDiv>


            </DivContainer>
        </Container>

    );
}