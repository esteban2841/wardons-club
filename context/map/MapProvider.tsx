'use client'
import React, { useReducer, useRef } from 'react'
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import LocationPopup from '@/components/atoms/LocationPopup';
import ReactDOM from 'react-dom';

export interface MapState {
    isMapReady: boolean;
    map?: Map
    ourLocations: ClubLocation[],
}

export interface ClubLocation {
    name: string,
    description: string,
    lngLat : [number, number],
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    ourLocations: [
        {
            name: 'Wardons Club - Sede castilla',
            description: 'Categorias: mini, juvenil, Horarios: Lunes 4pm, 6pm, Martes: 2pm, 5pm',
            lngLat : [-73.61277776876584, 4.14757463281509],
        },
        {
            name: 'Wardons Club -- Unicentro',
            description: 'Categorias: mini, juvenil, Horarios: Lunes 4pm, 6pm, Martes: 2pm, 5pm',
            lngLat : [-73.63395673601926, 4.142065106402868],
        }
    ]
}

interface Props {
    children: ReactElement | ReactElement[] | ReactNode
  }

export const MapProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)
    
    const setMap = (map: Map) =>{

        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>Aqui estas</h4>
                <p>Esta es tu posicion actual</p>
            `)

        new Marker({
            color: '#61DAFB'
        })
            .setLngLat(map.getCenter())
            .setPopup( myLocationPopup )
            .addTo(map);

            
        const locationMarker = state.ourLocations.map(location =>{
		    
            const popElement = document.createElement('div')
            popElement.className = 'marker';
            ReactDOM.render(<LocationPopup title={location.name} description={location.description} coord={location.lngLat}/>, popElement)

                

            const locationMark = new Marker({
                color: 'red'
            })
                .setLngLat(location.lngLat)
                .setPopup(new Popup()
                    .setLngLat(location.lngLat)
                    .setDOMContent(popElement)
                )
                .addTo(map)
    
        })
            
        dispatch({type: 'setMap', payload: map})
    }

    return (
        <MapContext.Provider value={{
            ...state,
            //Methods
            setMap,
        }}>
            {children}
        </MapContext.Provider>
    )
}
