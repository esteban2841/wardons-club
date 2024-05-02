'use client'
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
import { Box } from '@mui/material';
import { recordingsObject } from '@/utils/types/index'
import styled from 'styled-components'

const formWaveSurferOptions = (ref: HTMLElement | string ) => ({
   container: ref,
   waveColor: '#0f5e59',
   progressColor: '#854d0f',
   responsive: true,
   height: 140,
   normalize: true,
   barWidth: 1,
   barHeight: 5,
   barGap: 2,
})

const InputRange = styled.input`
   width: 100px;
   -webkit-appearance: none;
   appearance: none;
   background-color: #0f5e59;
   overflow: hidden;
   
   &&::-webkit-slider-runnable-track {
      height: 5px;
      -webkit-appearance: none;
      color: #854d0f;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-items: center;
      top: -7px;
   }
   
   &&::-webkit-slider-thumb {
      width: 20px;
      -webkit-appearance: none;
      height: 20px;
      border-radius: 20px;
      cursor: ew-resize;
      background: #fff;
      box-shadow: -80px 0 0 80px #854d0f;
   }
`;

export interface CallAudio {
   // recordingUrl: string,
   callDetail: recordingsObject,
}

const formatTime = (seconds: number) => {
   let date = new Date(0)
   date.setSeconds(seconds)
   return date.toISOString().substr(11,8)
}

function handleDownload(audioUrl: string) {
   const url = audioUrl; // Replace with your audio URL
   const link = document.createElement('a');
   link.href = url;
   link.download = audioUrl?.split('/').pop() || 'Recording'; // Set the file name for the download
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
}

const AudioPlayer = ({callDetail} : CallAudio) => {

   const waveFormRef = useRef(document.createElement('div'));
   const waveSurfer = useRef<any>(null);
   const [playing, setPlaying] = useState(false);
   const [volume, setVolume] = useState(0.5);
   const [muted, setMuted] = useState(false);
   const [duration, setDuration] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const [audioFileName, setAudioFileName] = useState('');
   
   const audioRef = useRef(callDetail.recordingUrl);
   const audioNameWithFormat = audioRef.current?.split('/').pop()
   const audioName = audioNameWithFormat?.split('.')[0] || 'Recording'
   
   useEffect(() => {
      
      //Create WaveSurfer Instance with options above
      const options = formWaveSurferOptions(waveFormRef.current)
      //load the audio file
      waveSurfer.current = WaveSurfer.create(options)

      waveSurfer.current.load(audioRef.current)
      //when ready
      waveSurfer.current.on('ready', ()=>{
         setVolume(waveSurfer.current.getVolume())
         setDuration(waveSurfer.current.getDuration())
         setAudioFileName(audioName)
      })

      //Update current time as audio plays
      waveSurfer.current.on('audioproces', () => {
         setCurrentTime(waveSurfer.current.getCurrentTime())
      })

      //Clean up event listeners and destroy instance on unmount
      return ()=>{
         waveSurfer.current.un('audioprocess')
         waveSurfer.current.un('ready')
         waveSurfer.current.destroy()
      }

 }, [audioRef.current]);

   const handlePlayPause = () => {
      setPlaying(!playing)
      waveSurfer.current.playPause()
   }
   const handleMute = () => {
      setMuted(!muted)
      waveSurfer.current.setVolume(muted ? volume: 0)
   }
   const handleVolume = (newVolume: number) => {
      setVolume(newVolume)
      waveSurfer.current.setVolume(newVolume)
      setMuted(newVolume === 0)
      
   }
   const handleVolumeDown = () => {
      handleVolume(Math.max(volume - 0.1, 0))
   }
   const handleVolumeUp = () => {
      handleVolume(Math.min(volume + 0.1, 1))
   }

 return (
   <div className='flex flex-col gap-8 p-4 w-full' key={callDetail.callId}>
      <div className='flex audio-info '>
         <h1 className='text-lg'>
            {audioFileName}
         </h1>
      </div>
      <div id='waveform' className='flex flex-col-reverse gap-6' ref={waveFormRef} style={{width: '100%'}} key='audioplayer border-y-2 border-solid box-border bg-[#141617] border-[#1F2122]'>

         <div className='flex flex-row p-4 gap-4 items-center justify-evenly controls w-full'>
            
            <Box sx={{ color: '#fff', cursor: 'pointer', fontSize: '6rem', display:'flex', alignItems:'center', justifyContent:'center' }} onClick={handlePlayPause} >
               { playing ?  <PauseCircleFilledIcon/> : <PlayCircleFilledIcon/>}
            </Box>
            <Box sx={{ color: '#fff', cursor: 'pointer', fontSize: '6rem', display:'flex', alignItems:'center', justifyContent:'center' }} onClick={handleMute}>
               { muted ? <ContactlessOutlinedIcon/> : <VolumeOffOutlinedIcon/>}
            </Box>
            <Box sx={{ color: '#fff', cursor: 'pointer', fontSize: '6rem', display:'flex', alignItems:'center', justifyContent:'center' }} onClick={handleVolumeDown}>
               <VolumeDownOutlinedIcon/>
            </Box>
            <InputRange 
               className='in-range:border-green-500 pointer'
               type="range"
               id='volume'
               name='volume'
               min='0'
               max='1'
               step='0.05'
               value={muted ? 0 : volume}
               onChange={(e)=> handleVolume(parseFloat(e.target.value))}
            />
            <Box sx={{ color: '#fff', cursor: 'pointer', fontSize: '6rem', display:'flex', alignItems:'center', justifyContent:'center' }} onClick={handleVolumeUp}>
               <VolumeUpOutlinedIcon/>
            </Box>
            <span>
               <p>
                  Length: {formatTime(currentTime)} / {formatTime(duration)+' '} 
               </p>
            </span>
            <span>
               Volume: {muted ? 0 : Math.round(volume * 100)} <br/>
            </span>
            <span onClick={()=>handleDownload(callDetail.recordingUrl!)}>
               <Box sx={{ color: '#fff', cursor: 'pointer', fontSize: '6rem', display:'flex', alignItems:'center', justifyContent:'center' }} onClick={handleVolumeDown}>
                  <FileDownloadSharpIcon/>
               </Box>
            </span>
         </div>

      </div>
   </div>
 );
};

export default AudioPlayer