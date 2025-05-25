import { BasketballBall } from '@/utils/types'
import { BallContext } from './BallContext'

type BallAction = {
    type: 'toggleRotation',
    payload: BasketballBall
}

export const ballReducer = (state: BallContext, action: BallAction) : BallContext => {
    switch (action.type) {
        case 'toggleRotation':
            return{
                ...state,
                ball: action.payload
            }
        default:
            return state
    } 
}