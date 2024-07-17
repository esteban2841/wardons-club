'use client'

import { useEffect } from "react";
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    .playerSource {
        display: none;
        transition-property: all;
        transition: all 1s;
        transition-behavior: allow-discrete;
    }
    .fade-in {
        opacity: 1;
        display: block;
    }
    
    .fade-out {
        opacity: 0;
        display: none;
    }
    
`
const SrcPlayer = styled.source`
`


interface Video {
    name: string,
    url: string
}
export const VideoPlayerSlider = ({data, classContainer}) => {
    
    let currentIndex = 0;
    
    function playVideosSequentially(videoArray : Array<HTMLVideoElement> , index: number) {
		console.log("TCL: playVideosSequentially -> videoArray", videoArray)
        const currentVideo = videoArray[currentIndex];
		console.log("TCL: playVideosSequentially -> currentVideo", currentVideo)
        currentVideo.pause();
        currentVideo.currentTime = 0;
        currentVideo.style.display = 'block' ; 
        currentVideo.classList.add('fade-in')
        currentVideo.play();
        // Apply fade-out effect
        
        
        
        currentVideo.onended = (event) => {
            currentVideo.classList.add('fade-out')
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
        <VideoPlayerContainer className='desktopVid'>
                {
                    data.map((video: Video)=>{
                        return <VideoPlayer muted key={video.name} src={video.url} preload="auto" className={classContainer} >
                        </VideoPlayer>
                    })
                }
        </VideoPlayerContainer>
    )
}
