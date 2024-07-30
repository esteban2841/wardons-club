'use client'
import styled from "styled-components";

const MainCoachImageContainer = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    /* object-position: 0px -350px; */
`

const CustomFigure = styled.figure`
    height: 600px;
    width: 100%;
    max-width: 900px;
    overflow: hidden;
    
    @media (max-width: 768px) {
        height: 300px;
        width: 100%;
        padding: 0px 20px;
    }
    
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
