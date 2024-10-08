'use client'

import { useEffect, useRef } from "react";
import styled from "styled-components";

const VideoPlayerContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
    }
    `
const VideoPlayer = styled.video`
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`
const SrcPlayer = styled.source`
`

interface VideoPlayer {
    data: [];
    classContainer: string;
}

interface Video {
    name: string,
    url: string,
    turn: string;
}
export const VideoPlayerSliderMobile = ({data, classContainer} : VideoPlayer) => {
    
    let currentIndex = 0;
    
    function playVideosSequentially(videoArray : Array<HTMLVideoElement> , index: number) {
        
            
        const currentVideo = videoArray[currentIndex];
        if(currentIndex === 0 ){

            currentVideo.style.height = '135%' ; 
            currentVideo.style.top = '-15%' ; 
        }
        currentVideo.onerror = (event) => {
            currentVideo.style.display = 'none'
            currentIndex = (currentIndex + 1) % videoArray.length; // Move to next index, wrapping around if necessary
            playVideosSequentially(videoArray, currentIndex); // Play the next video
        };
        // Apply fade-out effect
        const loaded = currentVideo.buffered.length
        currentVideo.style.display = 'block' ; 
        currentVideo.play();
        
        
        currentVideo.onended = (event) => {
            currentVideo.style.display = 'none'
            currentIndex = (currentIndex + 1) % videoArray.length; // Move to next index, wrapping around if necessary
            playVideosSequentially(videoArray, currentIndex); // Play the next video
        };
    }
useEffect(()=>{
    const videos = Array.from(document.querySelectorAll(`.${classContainer}`) as NodeListOf<HTMLVideoElement>);
    playVideosSequentially(videos, currentIndex)
}, [])
    return (
        <VideoPlayerContainer className='mobileVid'>
                {
                    data.map((video: Video, index)=>{
                        return <VideoPlayer muted key={video.name} src={video.url} preload="none" className={classContainer} id={video.turn} >
                        </VideoPlayer>
                    })
                }
        </VideoPlayerContainer>
    )
}
