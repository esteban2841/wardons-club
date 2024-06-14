'use client'
import React from 'react'
import styled from "styled-components";

const MainCoachImageContainer = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    /* object-position: 0px -350px; */
`

const CustomFigure = styled.figure`
    height: 980px;
    width: 100%;
    max-width: 1100px;
    border-radius: 25px;
    overflow: hidden;
    
`

export interface MainCoachImageProps {
    image: string;
    figCaptDescr: string;
}


const CustomCaption = styled.figcaption`

`

export const MainCoachImage = ({image, figCaptDescr} : MainCoachImageProps) => {
  return (
    <CustomFigure>
        <MainCoachImageContainer src={image}>
        
        </MainCoachImageContainer>
        <CustomCaption>
            {figCaptDescr}
        </CustomCaption>
    </CustomFigure>
  )
}
