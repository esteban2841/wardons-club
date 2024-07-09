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
export const VideoPlayerSlider = ({data}) => {
    
    let currentIndex = 0;
    
    function playVideosSequentially(videoArray : Array<HTMLVideoElement> , index: number) {
        const currentVideo = videoArray[currentIndex];
        // Apply fade-out effect
        currentVideo.style.display = 'block' ; 
        currentVideo.classList.add('fade-in')
        
        currentVideo.play();
        
        
        currentVideo.onended = (event) => {
            currentVideo.classList.add('fade-out')
            setTimeout(() => {
                currentVideo.style.display = 'none'
                currentIndex = (currentIndex + 1) % videoArray.length; // Move to next index, wrapping around if necessary
            }, 1000); // Match the timeout with the CSS transition duration
            playVideosSequentially(videoArray, currentIndex); // Play the next video
        };
    }
    useEffect(()=>{
        const videos = Array.from(document.querySelectorAll('.playerSource') as NodeListOf<HTMLVideoElement>);
        playVideosSequentially(videos, currentIndex)
    }, [])
    return (
        <VideoPlayerContainer>
                {
                    data.map((video: Video)=>{
                        return <VideoPlayer controls={false} autoPlay muted playsInline key={video.name} src={video.url} className='playerSource' >
                        </VideoPlayer>
                    })
                }
        </VideoPlayerContainer>
    )
}
