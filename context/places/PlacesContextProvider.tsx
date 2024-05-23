import { ReactElement } from 'react';
import { PlacesContext } from './PlacesContext';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
}

interface Props {
  children: ReactElement | Array<ReactElement>
}

export const PlacesContextProvider = ({children}: Props) => {
  return (
    <PlacesContext.Provider value={{
        isLoading: true,
        userLocation: undefined
    }}>{children}</PlacesContext.Provider>
  )
}
