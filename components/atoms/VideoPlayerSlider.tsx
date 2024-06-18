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
        transition: opacity 1s ease-in-out;
    }
    .fade {
        opacity: 0;
    }
`
const SrcPlayer = styled.source`
`


export const VideoPlayerSlider = ({data}) => {
    
    useEffect(()=>{
        const videos = Array.from(document.querySelectorAll('.playerSource'));
        console.log("TCL: VideoPlayerSlider -> videos", videos)
        let currentIndex = 0;
    
        function playVideosSequentially() {
            const currentVideo = videos[currentIndex];
            currentVideo.style.display = 'block'; // Show current video
            currentVideo.play();
        
            currentVideo.onended = () => {
                currentVideo.classList.add('fade'); // Apply fade-out effect
                setTimeout(() => {
                    currentVideo.style.display = 'none'; // Hide video after fade-out
                    currentIndex = (currentIndex + 1) % videos.length; // Move to next index, wrapping around if necessary
					console.log("TCL: currentVideo.onended -> currentIndex", currentIndex)
                    playVideosSequentially(); // Play the next video
                }, 1000); // Match the timeout with the CSS transition duration
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
