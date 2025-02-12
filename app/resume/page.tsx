"use client"

import SideBar from "@/app/components/Resume/SideBar";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Content from "@/app/components/Resume/Content";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    background-color: black;
    color: white;
    font-family: Arial, "Times New Roman", sans-serif;
`;

export default function Resume() {
    return (
        <>
            <NavBar />
            <Container>
                <SideBar />
                <Content/>
            </Container>
            <Footer/>

        </>
    );
}