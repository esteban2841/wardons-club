'use client'
import styled from 'styled-components'
import { VideoPlayerSlider } from '../atoms/VideoPlayerSlider';
import { Suspense, useEffect, useState } from 'react';
import WardonSVG from '../atoms/WardonSVG';
import { VideoPlayerSliderMobile } from '../atoms/VideoPlayerSliderMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HomeContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    height: 100vh;
    overflow: hidden;
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

const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: absolute;
    padding: 0px 0px 0px 100px;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 12;
    padding: 100px 100px;
    .grey{
        color: #fff;
        font-size: 50px;
        opacity: .7;
    }
    @media (min-width: 1700px) {
        font-size:300px;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 100px 0px 0px 100px;
        .star{
            width: 40px; 
            height: 40px; 
        }
    }
    @media (max-width: 500px) {
        padding: 60px 20px;
        justify-content:flex-end;
        .star{
            height: 20px; 
            width: 20px;   
        }
    }
`
const WardonsTitle = styled.h1`
    font-family: "Julee", cursive;
    font-weight: 1000;
    font-style: bold;
    color: #E84C1A;
    font-size: 70px;
    
    @media (min-width: 1700px){
        font-size:68px;
        
    }
    @media (max-width: 1700px){
        
    }
    @media (max-width: 768px){
        font-size: 46px;

    }
    `
const SubTitle = styled.h1`
    font-family: 'Futura Md BT', sans-serif;
    font-size: 66px;
    font-weight: 900;
    font-style: normal;
    @media (min-width: 1700px) {
        font-size: 55px;
        align-items: flex-start;
    }
    @media (max-width: 760px){
        font-size:36px;
        font-weight: 700;
    }
`

export const Home = (props) => {

    // const [isMobile, setIsMobile] = useState(false)

    // useEffect(()=>{
    //     const mobile = document.
    // }, [isMobile])

    return <HomeContainer className='carrousel'>
        <Suspense fallback={<p>Loading video...</p>}>
            {<VideoPlayerSlider classContainer={'desktop'} data={props.data}></VideoPlayerSlider>}
        </Suspense>
        <Suspense fallback={<p>Loading video...</p>}>
            {<VideoPlayerSliderMobile classContainer={'mobile'} data={props.dataMobile}></VideoPlayerSliderMobile>}
        </Suspense>
        {/* <div className='flex absolute w-[1000px] top-[10%] right-[50%] z-10 opacity-80'>
            <WardonSVG></WardonSVG>

        </div> */}
        <Overlay>
            <WardonsTitle>
                WARDONS
            </WardonsTitle>
            <SubTitle>
                CLUB
            </SubTitle>
            <div className='flex flex-row w-full gap-2'>
                <FontAwesomeIcon className="icons star" icon={faStar} size="2x" style={{
                    color: 'gold'
                }} />
                <FontAwesomeIcon className="icons star" icon={faStar} size="2x" style={{
                    color: 'gold'
                }} />
                <FontAwesomeIcon className="icons star" icon={faStar} size="2x" style={{
                    color: 'gold'
                }} />
                <FontAwesomeIcon className="icons star" icon={faStar} size="2x" style={{
                    color: 'gold'
                }} />
                <FontAwesomeIcon className="icons star" icon={faStar} size="2x" style={{
                    color: 'gold'
                }} />

            </div>
            <WardonsTitle className='grey'>
                Mas que un club de basket...
            </WardonsTitle>
        </Overlay>
    </HomeContainer>
};
