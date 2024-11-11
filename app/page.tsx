"use client"

import styled from "styled-components";
import { Container, Typography } from '@mui/material';
import Drawer from "@/app/components/SideNavShelf";
import CustomInput from "@/app/components/CustomInput";
import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";


const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 0;
`;

const StyledDiv = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 1rem 0;
`;

const QuickNavDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`;

const MainContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: gray;
`;

export default function Home() {
    return (
        <>

            <Header />

                <Container>
                <QuickNavDiv>
                    <Drawer />
                </QuickNavDiv>
                <ContentContainer>
                    <StyledDiv>
                        <CustomInput />
                    </StyledDiv>

                </ContentContainer>
                </Container>
            <NavBar />
            <Footer/>

        </>
    );
}