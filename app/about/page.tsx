"use client"

import NavBar from "@/app/components/NavBar";
import Main from "@/app/components/AboutMe/Main"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
`;

const NavWrapper = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

export default function Resume() {
    return (
        <Container>
            <NavWrapper>
                <NavBar />
            </NavWrapper>
            <Main/>
        </Container>
    );
}