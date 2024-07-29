'use client'
import styled from "styled-components";

const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0px 20px;
        overflow: hidden;
    }
    `

const FolderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 900px;
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
    max-width: 900px;
    border-radius: 25px;
    overflow: hidden;
    .figcaption{
        display: hidden;
    }
    @media (max-width: 768px) {
        height: 300px;
    }
    
    `
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    gap: 10px;
    @media (max-width: 768px) {
        width: 100%;
        overflow: hidden;
    }
    `

const WardonsTitle = styled.p`
    font-family: "Julee", curive;
    display: inline;
    font-weight: 1000;
    font-style: bold;
    font-size: 28px;
    color: #E84C1A;
    `
const SubTitle = styled.p`
    display: inline;
    font-family: 'Futura Md BT', sans-serif;
    color: #fff;
    text-align: justify;
    font-size: 20px;
    font-weight: 300;
`

export interface CoachFolderImages {
    image1: string;
    figCaptDescr1: string;
    image2: string;
    figCaptDescr2: string;
    titleContent?: string;
    subtitleContent?: string;
}


const CustomCaption = styled.figcaption`

`
export const CoachFolderImages = ({image1, figCaptDescr1, image2, figCaptDescr2, titleContent, subtitleContent} : CoachFolderImages) => {
  return (
    <ViewContainer>
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
        <TextContainer>
            <WardonsTitle >{titleContent}</WardonsTitle>

            <SubTitle >{subtitleContent}</SubTitle>
        </TextContainer>
        

    </ViewContainer>
  )
}
