'use client'

import { useEffect } from "react";
import styled from "styled-components";

const VideoPlayerContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
const VideoPlayer = styled.video`
    width: 100%;
    height: 100%;
    .playerSource {
        display: none;
        transition-property: all;
        transition: all 2s;
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


export const VideoPlayerSlider = ({data}) => {
    
    useEffect(()=>{
        const videos = Array.from(document.querySelectorAll('.playerSource') as NodeListOf<HTMLVideoElement>);
        let currentIndex = 0;
    
        function playVideosSequentially() {
            const currentVideo = videos[currentIndex];
            currentVideo.style.display = 'block' ; 
            currentVideo.classList.add('fade-in')
            // Apply fade-out effect
            currentVideo.play();
            
            currentVideo.onended = (event) => {
                currentVideo.classList.add('fade-out')
                setTimeout(() => {
                    currentVideo.style.display = 'none'
                    currentIndex = (currentIndex + 1) % videos.length; // Move to next index, wrapping around if necessary
                    playVideosSequentially(); // Play the next video
                }, 2000); // Match the timeout with the CSS transition duration
            };
        }
        playVideosSequentially()
    })
    return (
        <VideoPlayerContainer>
                {
                    data.map(video=>{
                        return <VideoPlayer controls={false} autoPlay muted playsInline key={video.name} src={video.url} className='playerSource' >
                        </VideoPlayer>
                    })
                }
        </VideoPlayerContainer>
    )
}
