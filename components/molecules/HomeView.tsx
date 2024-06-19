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
    .mobileVid {
        display: none;
    }
    .desktopVid {
        display: block;
    }
    @media (max-width: 768px) {
        .desktopVid {
            display: none;
        }
        .mobileVid {
            display: block;
        }
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

export const Home = (props) => {
    useEffect(()=>{
        const sliderSelector = document.querySelector('.rs-carousel-content')
        sliderSelector?.removeAttribute('height')
    }, [])
    return <HomeContainer className='carrousel'>
        
        <Carousel className="custom-slider desktopVid" style={{
            height: '100vh',
        }}>
            {<VideoPlayerSlider data={props.data}></VideoPlayerSlider>}
        </Carousel>
        <Carousel className="custom-slider mobileVid" style={{
            height: '100vh',
        }}>
            {<VideoPlayerSlider data={props.dataMobile}></VideoPlayerSlider>}
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
