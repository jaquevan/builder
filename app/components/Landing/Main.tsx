import styled from "styled-components";
import Content from "@/app/components/Landing/Content";
import Buttons from "@/app/components/Landing/Buttons";
import { Typography } from "@mui/material";
import Status from "@/app/components/Landing/Status";

const StyledBody = styled.div`
    background-color: black;
    overflow-x: hidden;
    width: 100%;
    margin: 0;
`;

const StyledSection = styled.div`
    display: block;
    width: 90vw;
    height: auto;
    background-color: black;
    color: white;
    font-family: Arial, "Times New Roman", sans-serif;
    margin: 0 auto;
`;

const StyledText = styled(Typography)`
    margin-top: 2%;
    padding-left: 5%;
    text-align: left;
`;
const ButtonDiv = styled.div`
    height: 7vh;
    `;

const StyledDiv = styled.div`
    justify-content: right;
    margin: -5% 75%;
    
    @media (max-width: 768px) {
        margin: 0 auto;
    
`;

export default function Main() {
    return (
        <StyledBody>
            <StyledSection>
                <StyledText variant="h3"><i>Welcome Aboard</i></StyledText>
                    <ButtonDiv>
                        <Buttons/>
                        <StyledDiv>
                            <Status />
                        </StyledDiv>
                    </ButtonDiv>
                <Content />
            </StyledSection>

        </StyledBody>
    );
}