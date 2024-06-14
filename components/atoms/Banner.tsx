'use client'

import styled from "styled-components";
import { ContactButton } from "./ContactButton";

export interface BannerProps {
    image: string;
    title: string;
    buttonTitle: string;
    figCaptDescr: string;
    size: number;
}

const BannerContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    color:  #ffffff;
    width: 100%;
`

const Overlay = styled.div`
    display: flex;
    position: absolute;
    height: 300px;
    width: 100%;
    z-index: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    font-size: 24px;
    box-shadow: inset 0 0 300px #0000;
    h1{
        font-weight: 700;
        font-size: 34px;
    }
    `
const CustomFigure = styled.figure`
    background-color: #000000;
    opacity: 0.5;
    height: 300px;
    width: 100%;
    
`
const CustomCaption = styled.figcaption`

`
const BannerImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0px -350px;
`

export const Banner = ({image, title, buttonTitle, figCaptDescr} : BannerProps) => {
  return (
    <BannerContainer>
        <Overlay>
            <h1>{title}</h1>
            <ContactButton>
            {buttonTitle}
            </ContactButton>
            
        </Overlay>
        <CustomFigure>
            <BannerImage src={image}>
            
            </BannerImage>
            <CustomCaption>
                {figCaptDescr}
            </CustomCaption>
        </CustomFigure>
    </BannerContainer>
  )
}
