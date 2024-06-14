'use client'
import styled from 'styled-components'
import { Banner } from '../atoms/Banner'
import { MainCoachImage } from '../atoms/MainCoachImage'

const CoachesViewContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

interface BannerProps {
  image: string;
  title: string;
  buttonTitle: string;
  figCaptDescr: string;
  size: number;
}

// export interface CoachesView {
//   banner: BannerProps,
//   mainCoachImage: 
// }

export const CoachesVIew = ({data}) => {
  return (
    <CoachesViewContainer>
      {
        data.map(component=>{
          if(component.type === 'banner'){
            return <Banner image={component.image} buttonTitle={component.buttonTitle} 
            figCaptDescr={component.figCaptDescr} title={component.title} size={300} />
          }
          if(component.type === 'mainCoachImage'){
            return <MainCoachImage image={component.image} figCaptDescr={component.figCaptDescr} />
          }
        })
      }
    
      
      
    </CoachesViewContainer>
  )
}
