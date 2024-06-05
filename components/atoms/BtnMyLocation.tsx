'use client'
import { MapContext, PlacesContext } from '@/context'
import React, { useContext } from 'react'
import styled from 'styled-components'

const MyLocationButton = styled.button`
    background-color: red;
    padding: 8px 4px;
    color: white;
    position: absolute;
    z-index: 3;
    right: 30px;
    top: 30px;
    border-radius: 10px;
`

export const BtnMyLocation = () => {
    const { map, isMapReady }= useContext( MapContext)
    const { userLocation } = useContext( PlacesContext)

    const onClick = ()=>{
        if(!isMapReady) throw new Error('Mapa no esta listo')
        if(!userLocation) throw new Error('No hay ubicacion del usuario')
            
        map?.flyTo({
            zoom: 12,
            center: userLocation
        })
    }
  return (
    <MyLocationButton className='' onClick={onClick}>
        Ir a mi ubicacion
    </MyLocationButton>
  )
}
