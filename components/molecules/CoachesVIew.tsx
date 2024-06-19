'use client'
import styled from 'styled-components'
import { Banner } from '../atoms/Banner'
import { MainCoachImage } from '../atoms/MainCoachImage'
import { CoachFolderImages } from '../atoms/CoachFolderImages'

const CoachesViewContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-bottom: 30px;
  box-sizing: border-box;
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
            return <Banner bannerPositionY={55} image={component.image} buttonTitle={component.buttonTitle} 
            figCaptDescr={component.figCaptDescr} title={component.title} size={300} />
          }
          if(component.type === 'mainCoachImage'){
            return <MainCoachImage image={component.image} figCaptDescr={component.figCaptDescr} />
          }
          if(component.type === 'folderImage'){
            return <CoachFolderImages image1={component.image1} figCaptDescr1={component.figCaptDescr1} image2={component.image2} figCaptDescr2={component.figCaptDescr2} />
          }
        })
      }
    
      
      
    </CoachesViewContainer>
  )
}
