'use client'
import { ReactElement, ReactNode, useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '@/helpers';
import styled from 'styled-components';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
}

interface Props {
  children: ReactElement | ReactElement[] | ReactNode
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top,  #000000, #141414, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top , #000000, #141414, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
`

export const PlacesProvider = ({children}: Props) => {
  
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  useEffect(()=>{
    getUserLocation().then(lngLat => dispatch({
      type: 'setUserLocation',
      payload: lngLat
    }))
  }, [])

  return (
    <AppContainer>

      <PlacesContext.Provider value={{
          ...state,
      }}>{children}</PlacesContext.Provider>
    </AppContainer>
  )
}
