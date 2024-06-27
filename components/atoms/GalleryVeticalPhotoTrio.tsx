'use client'

import { fetchStorageUrl } from "@/helpers/handleStorageData"
import styled from "styled-components"

const ImageGalleryTrioContainer = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 10px;
`
const ImageGalleryTrio = styled.img`
  width: 33%;
  object-fit: contain;
`

export const GalleryVeticalPhotoTrio = ({photosTriPack, defaultImgUrl}) => {

  const showDefaulImg = async (e)=>{
    e.target.onerror = null; // Prevents infinite loop in case the default image fails to load
    e.target.src = defaultImgUrl;
  }

  return (
    <ImageGalleryTrioContainer>
        {photosTriPack?.map(photo=>{
          return <ImageGalleryTrio src={photo.url} alt={photo.name} onError={(e)=>showDefaulImg(e)} />  
        })}
        <figcaption>Baloncesto niños mixto villavicencio</figcaption>
    </ImageGalleryTrioContainer>
  )
}
