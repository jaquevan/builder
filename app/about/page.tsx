"use client"

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Main from "@/app/components/AboutMe/Main"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export default function Resume() {
    return (
        <Container>
            <NavBar />
            <Main/>
            <Footer />
        </Container>
    );
}