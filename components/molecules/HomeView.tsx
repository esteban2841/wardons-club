'use client'
import styled from 'styled-components'
import "rsuite/dist/rsuite.css";
import { Carousel } from 'rsuite';
import Image from 'next/image'
import { useEffect } from 'react';
import { VideoPlayerSlider } from '../atoms/VideoPlayerSlider';

const HomeContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    height: 100vh;
    .custom-slider {
        height: '100vh'
    }
    .rs-carousel-toolbar{
    
        z-index: 3;
    }
`
const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`

const SlideContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    padding: 0px 0px 0px 100px;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 2;
    @media (min-width: 1700px) {
        font-size:300px;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 50px;
        padding: 100px 0px 0px 100px;
    }
    @media (max-width: 480px) {
        font-size:300px;
        padding: 60px 20px;
        justify-content:flex-end;
    }
`
const WardonsTitle = styled.h1`
    font-family: "Julee", cursive;
    font-weight: 1000;
    font-style: bold;
    color: #E84C1A;
    font-size: 90px;
    @media (min-width: 1700px){
        font-size:150px;
        margin-bottom: 70px;
        
    }
    @media (max-width: 1700px){
        margin-bottom: 30px;
        
    }
    @media (max-width: 768px){
        margin-bottom: 10px;
        font-size:46px;

    }
    `
const SubTitle = styled.h1`
    font-family: 'Futura Md BT', sans-serif;
    font-size: 90px;
    font-weight: 900;
    font-style: normal;
    @media (min-width: 1700px) {
        font-size:130px;
        align-items: flex-start;
    }
    @media (max-width: 760px){
        font-size:36px;
        font-weight: 700;
    }
`

const slideData = [
    {},
    {},
    {},
]

export const Home = ({data}) => {
    useEffect(()=>{
        const sliderSelector = document.querySelector('.rs-carousel-content')
        sliderSelector?.removeAttribute('height')
    }, [])
    return <HomeContainer className='carrousel'>
        
        <Carousel autoplay autoplayInterval={4000} placement='bottom' className="custom-slider" style={{
            height: '100vh',
        }}>
            {<VideoPlayerSlider data={data}></VideoPlayerSlider>}
            {/* <SlideContent>
                <ImageContainer src="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/sign/Galeria/IMG_5730.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxlcmlhL0lNR181NzMwLmpwZWciLCJpYXQiOjE3MTc1NDI5MzYsImV4cCI6MTc0OTA3ODkzNn0.YvK6TYjTOXuA4MFiobS2fBDqq71QHMrf49HidHD390s&t=2024-06-04T23%3A15%3A35.966Z" alt='carousel-img' />
            </SlideContent>
            <SlideContent>
                <ImageContainer src="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/sign/Galeria/IMG_2483.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxlcmlhL0lNR18yNDgzLmpwZWciLCJpYXQiOjE3MTYwNzY4MDUsImV4cCI6MTcxNjY4MTYwNX0.pFwkTaWjq9aoGGf-zs_nmLGWVC_MnbvOoTNkuN1h3iY&t=2024-05-19T00%3A00%3A03.882Z" alt='carousel-img-1' />
            </SlideContent> */}
        </Carousel>
        <Overlay>
            <WardonsTitle>
                WARDONS
            </WardonsTitle>
            <SubTitle>
                CLUB
            </SubTitle>
        </Overlay>
    </HomeContainer>
};
