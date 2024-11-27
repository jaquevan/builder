import styled from 'styled-components';
import { Typography } from '@mui/material';
import Mascot from "../../public/mascot.png";
import Image from 'next/image';

const StyledDiv = styled.div`
    display: block;
    justify-content: left;
    padding: 2rem;
    background-color: orange;
    width: 10%;
    height: 100vh;
`
const Name = styled(Typography)`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`;

const PFP = styled(Image)`
    width: 100px;
    height: 100px;
    margin: 1% auto;
    border-radius: 50%;
    justify-content: center;
`
export default function SideBar(){
    return (
        <StyledDiv>
            <Name>SideBar</Name>
            <PFP src={Mascot} alt="Profile Picture"/>
        </StyledDiv>
    )
}