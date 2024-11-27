import styled from 'styled-components';
import { Typography } from '@mui/material';

const StyledTitle = styled(Typography)`
    text-align: center;
    padding-left: 25%;
`;

export default function Title() {
    return(
        <>
        <StyledTitle variant="h1">Evan Jaquez</StyledTitle>

        <p>Frontend Developer</p>
        </>
    )
}