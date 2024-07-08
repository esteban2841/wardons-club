'use client'
import React, { useContext, useLayoutEffect, useRef } from 'react'
import { PlacesContext, MapContext } from '../../context'
import mapboxgl from 'mapbox-gl'
import { BtnMyLocation } from '../atoms/BtnMyLocation';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXN0ZWJhbjI4NDEiLCJhIjoiY2xiYnIwdG03MGMyaTNxcWduNXM5d3k3NyJ9.p-Z-qVhVGSAMeTyAehHcHA';

export const MapScenarios = () => {
  const { isLoading, userLocation } = useContext(PlacesContext)
  const { setMap } = useContext(MapContext)
  const mapDiv = useRef(null)

  useLayoutEffect(()=>{
    if( !isLoading ) {
      const map = new mapboxgl.Map({
        container: mapDiv.current, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 12, // starting zoom
      });

      setMap(map)
    }
  }, [ isLoading ])

  return (
    <div ref={mapDiv} 
      style={{
        backgroundColor: 'red',
        height: '50vh',
        left: 0,
        position: 'relative',
        top: 0,
        width: '80%',
        boxSizing: 'border-box',
        borderRadius: '10px'
      }}
    >
      { userLocation?.join(',') }
      <BtnMyLocation></BtnMyLocation>
    </div >
  )
}
