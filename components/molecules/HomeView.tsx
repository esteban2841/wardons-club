'use client'
import styled from 'styled-components'
import "rsuite/dist/rsuite.css";
import { Carousel } from 'rsuite';
import Image from 'next/image'

const HomeContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 1000px;
  position: relative;
  .custom-slider{
    width: 100%;
    height: 100%;
  }
  .rs-carousel-toolbar{
    z-index: 3;
  }
`
const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const SlideContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    padding: 300px 0px 0px 100px;
    gap: 30px;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 2;
`
const WardonsTitle = styled.h1`
    font-family: "Julee", cursive;
    font-weight: 400;
    font-style: normal;
    color: #E84C1A;
    font-size: 90px;
`
const SubTitle = styled.h1`
    font-family: "Londrina Solid", sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 68px;
    color: '#fff'
`

const slideData = [
    {},
    {},
    {},
]

export const Home = () => (
    <HomeContainer className='carrousel'>
        
        <Carousel autoplay autoplayInterval={4000} placement='bottom' className="custom-slider">
            <SlideContent>
                <ImageContainer src="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/sign/Galeria/IMG_3532.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxlcmlhL0lNR18zNTMyLmpwZWciLCJpYXQiOjE3MTYwNzY2NzQsImV4cCI6MTcxNjY4MTQ3NH0.nJCY32YItqoqLs2pQxUZM9z8NaDPgAPtxlNfql52VZw&t=2024-05-18T23%3A57%3A52.595Z" alt='carousel-img' />
            </SlideContent>
            <SlideContent>
                <ImageContainer src="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/sign/Galeria/IMG_2483.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxlcmlhL0lNR18yNDgzLmpwZWciLCJpYXQiOjE3MTYwNzY4MDUsImV4cCI6MTcxNjY4MTYwNX0.pFwkTaWjq9aoGGf-zs_nmLGWVC_MnbvOoTNkuN1h3iY&t=2024-05-19T00%3A00%3A03.882Z" alt='carousel-img-1' />
            </SlideContent>
        </Carousel>
        <Overlay>
            <WardonsTitle>
                WARDONS
            </WardonsTitle>
            <SubTitle>
                BASKETBALL CLUB
            </SubTitle>
        </Overlay>
    </HomeContainer>
);
