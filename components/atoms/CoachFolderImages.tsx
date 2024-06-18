'use client'
import styled from "styled-components";

const FolderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
    gap: 30px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0px 20px;
        overflow: hidden;
    }
    `
const MainCoachImageContainer = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
        object-fit: cover;
    }
    
    /* object-position: 0px -350px; */
    `

const CustomFigure = styled.figure`
    height: 980px;
    width: 100%;
    max-width: 1200px;
    border-radius: 25px;
    overflow: hidden;
    @media (max-width: 768px) {
        height: 440px;
    }
    
`

export interface CoachFolderImages {
    image1: string;
    figCaptDescr1: string;
    image2: string;
    figCaptDescr2: string;
}


const CustomCaption = styled.figcaption`

`
export const CoachFolderImages = ({image1, figCaptDescr1, image2, figCaptDescr2} : CoachFolderImages) => {
  return (
    <FolderContainer>
        <CustomFigure>
            <MainCoachImageContainer src={image1}>
            
            </MainCoachImageContainer>
            <CustomCaption>
                {figCaptDescr1}
            </CustomCaption>
        </CustomFigure>
        <CustomFigure>
            <MainCoachImageContainer src={image2}>
            
            </MainCoachImageContainer>
            <CustomCaption>
                {figCaptDescr2}
            </CustomCaption>
        </CustomFigure>
    </FolderContainer>
  )
}
