'use client'

import { fetchStorageUrl } from "@/helpers/handleStorageData"
import { useEffect, useState } from "react";
import styled from "styled-components"

interface WardonPhoto{
  type: string;
  url: string
  name: string;
}


const ImageGalleryTrioContainer = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 10px;
  .caption{
    visibility: hidden;
    height: 0px;
  }
`
const SkeletonLoader = styled.div`
  background-color: #ccc;
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ImageGalleryTrio = styled.img`
  width: 30%;
  object-fit: contain;
  border-radius: 10px;
`

export const GalleryVeticalPhotoTrio = ({photosTriPack, defaultImgUrl}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate network delay
    return () => clearTimeout(timer);
  }, []);


  const showDefaulImg = async (e)=>{
    e.target.onerror = null; // Prevents infinite loop in case the default image fails to load
    e.target.src = defaultImgUrl;
  }

  return (
    <ImageGalleryTrioContainer>
      {loading? (
        <>
          {[...Array(3)].map((_, index) => (
            <SkeletonLoader key={index} style={{ width: '33%', height: 'auto', borderRadius: '10px' }} />
          ))}
        </>
      ) : photosTriPack?.map(photo=>{
        return <ImageGalleryTrio loading="lazy" src={photo.url} alt={photo.name} onError={(e)=>showDefaulImg(e)} />  
        })
      }

      <figcaption className="caption">Baloncesto niños mixto villavicencio</figcaption>
    </ImageGalleryTrioContainer>
  )
}
