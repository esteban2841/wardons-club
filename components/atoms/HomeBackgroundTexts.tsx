'use client'

import styled from "styled-components"

interface BackContainerProps {
    positionText: 'left' | 'right';
    imageUrl: string;
    titleContent?: string;
    subtitleContent?: string;
    customAdjust?: string;
}
interface ContainerProps {
    positionText: 'left' | 'right';
}


const BackgroundEthicContainer = styled.div<BackContainerProps>`
    display: flex;
    flex-direction: row;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:  ${props => props.customAdjust ? `${props.customAdjust}%` : ''};
    justify-content: ${props => props.positionText ? (props.positionText) : ''};
    background-image:  url(${props => props.imageUrl ? (props.imageUrl) : ''});
`
const TextContainer = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: ${props => props.positionText == 'left' ? 'flex-start' : 'flex-end'};
    width: 70%;
    height: 100%;
    position: relative;
    padding: 60px;
    gap: 25px;
`

const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
`

const WardonsTitle = styled.h1<ContainerProps>`
    font-family: "Julee", cursive;
    font-weight: 1000;
    font-style: bold;
    color: #fff;
    font-size: 66px;
    text-align: ${props => props.positionText};
    opacity: .7;
    @media (min-width: 1700px){
        font-size:150px;
        
    }
    @media (max-width: 1700px){
        
    }
    @media (max-width: 768px){
        font-size:46px;

    }
    `
const SubTitle = styled.h1<ContainerProps>`
    font-family: 'Futura Md BT', sans-serif;
    font-size: 30px;
    font-weight: 900;
    font-style: italic;
    opacity: .7;
    text-align: ${props => props.positionText};
    @media (min-width: 1700px) {
        font-size:130px;
        align-items: flex-start;
    }
    @media (max-width: 760px){
        font-size:36px;
        font-weight: 700;
    }
`

export const HomeBackgroundTexts = ({positionText, imageUrl, customAdjust, titleContent, subtitleContent}: BackContainerProps) => {
  return (
    <BackgroundEthicContainer customAdjust={customAdjust} positionText={positionText} imageUrl={imageUrl}>
        <Overlay></Overlay>
        <TextContainer positionText={positionText}>
            <WardonsTitle positionText={positionText}>{titleContent}</WardonsTitle>
            <SubTitle positionText={positionText}>{subtitleContent}</SubTitle>
        </TextContainer>
    </BackgroundEthicContainer>
  )
}
