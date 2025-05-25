'use client'
import React, { useReducer, useRef } from 'react'
import { BallContext } from './BallContext';
import { ballReducer } from './BallReducer';
import { BasketballBall } from '@/utils/types';

export interface SectionRef {
    current: HTMLElement,
    name: string
}


const INITIAL_STATE: BallContext = {
    ball: {autoRotate: true}
}

interface Props {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode
  }

export const BallProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(ballReducer, INITIAL_STATE)
    
    const toggleRotation = (payload: BasketballBall) =>{
            
        dispatch({type:'toggleRotation', payload: payload})
    }


    return (
        <BallContext.Provider value={{
            ...state,
            toggleRotation
        }}>
            {children}
        </BallContext.Provider>
    )
}
