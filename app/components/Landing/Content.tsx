"use client";
import styled, { keyframes } from "styled-components";
import Train from "../../public/spr_train_0.png";
import Image from "next/image";
import Buttons from "@/app/components/Landing/Buttons";
import Status from "@/app/components/Landing/Status";
import City from "../../public/city.png";

const moveTrain = keyframes`
    0% {
        transform: translateX(-80%);
    }
    15% {
        transform: translateX(-50%);
    }
    50% {
        transform: translateX(10%);
    }
    85% {
        transform: translateX(8%);
    }
    100% {
        transform: translateX(100%);
    }
`;



const TrackContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20vw;
    background: url(${City.src}) no-repeat bottom center;
    background-size: 100% 100%;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 30vw;
    }

    @media (max-width: 480px) {
        height: 40vw;
    }
`;

const TrainContainer = styled.div`
    position: absolute;
    bottom: 4%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    animation: ${moveTrain} 8s ease-out infinite;
`;

const TrainImage = styled(Image)`
    width: 12vw;
    max-width: 150px;
    height: auto;

    @media (max-width: 768px) {
        width: 15vw;
    }

    @media (max-width: 480px) {
        width: 18vw;
    }
`;

export default function Content() {
    return (
            <TrackContainer>
                <TrainContainer>

                    <TrainImage src={Train} alt="Train 1" />
                    <TrainImage src={Train} alt="Train 2" />
                    <TrainImage src={Train} alt="Train 3" />
                </TrainContainer>


            </TrackContainer>



    );
}
