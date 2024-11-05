"use client"

import styled from "styled-components"
import { Container } from '@mui/material';

const StyledText = styled.h1`
    text-align: center;
    background-color: #fff600;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2% 0;
    
`;

const StyledDiv = styled.div`
    background-color: rgba(6,11,39,0.51);
    padding: 10%;
`;

export default function Home() {
  return (
      <Container>
        <StyledText>
          Builder Co.
        </StyledText>
          <StyledDiv>

          </StyledDiv>
      </Container>

  );
}