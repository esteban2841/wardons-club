'use client'
import { createContext } from 'react'
import { BasketballBall } from '@/utils/types'

export interface BallContext {
    ball: BasketballBall
    toggleRotation?: (payload: any) => void
}

export const BallContext = createContext({} as BallContext)