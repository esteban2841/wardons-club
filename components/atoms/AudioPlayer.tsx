'use client'
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js'
import axios from 'axios'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import { Box } from '@mui/material';
import { recordingsObject } from '@/utils/types/index'
import styled from 'styled-components'

const formWaveSurferOptions = (ref) => ({
   container: ref,
   waveColor: '#0f5e59',
   progressColor: '#854d0f',
   responsive: true,
   height: 140,
   normalize: true,
   backend: 'WebAudio',
   barWidth: 1,
   barHeight: 5,
   barGap: 2,
})

export interface CallAudio {
   // recordingUrl: string,
   callDetail: recordingsObject,
}

const formatTime = (seconds: number) => {
   let date = new Date(0)
   date.setSeconds(seconds)
   return date.toISOString().substr(11,8)
}

const AudioPlayer = ({callDetail} : CallAudio) => {

   const waveFormRef = useRef(null);
   const waveSurfer = useRef(null);
   const [playing, setPlaying] = useState(false);
   const [volume, setVolume] = useState(0.5);
   const [muted, setMuted] = useState(false);
   const [duration, setDuration] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const [audioFileName, setAudioFileName] = useState('');
   
   const audioRef = useRef(callDetail.recordingUrl);
   const audioNameWithFormat = audioRef.current.split('/').pop()
   const audioName = audioNameWithFormat.split('.')[0]

 useEffect(() => {
   const options = formWaveSurferOptions(waveFormRef.current)

   //Create WaveSurfer Instance with options above
   waveSurfer.current = WaveSurfer.create(options)
   //load the audio file
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
   const handleVolume = (newVolume) => {
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
   <div className='flex flex-col gap-8 p-4 w-full'>
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
            <input 
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
         </div>

      </div>
   </div>
 );
};

export default AudioPlayer