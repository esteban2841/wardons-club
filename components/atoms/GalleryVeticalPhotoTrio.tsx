'use client'

import { fetchStorageUrl } from "@/helpers/handleStorageData"
import { useEffect, useState } from "react";
import styled from "styled-components"
import { WallperBackground } from "./WallperBackground";

interface WardonPhoto{
  type: string;
  url: string
  name: string;
  line: number;
  tag?: string;
}
interface GalleryTrioPhotos{
  photosTriPack: Array<WardonPhoto>;
  defaultImgUrl: string; 
  radius: boolean;
  maximumWidth: string;
}
interface Rad{
  radius: boolean
}
interface ContainerWidth{
  maximumWidth?: string
}
interface lineType{
  line: number
}

const ImageGalleryTrioContainer = styled.figure<ContainerWidth>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${props=>props.maximumWidth? props.maximumWidth :  '800px'};
  position: relative;
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
const Loader = styled.div<Rad>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1px;
  width: 30%;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(270deg, #dcdcdc, #3c3d3c, #131313);
  background-size: 200% auto;
  animation: Gradient 3s ease infinite;
  border-radius: ${props => props.radius ? '10px' : ''};
  @keyframes Gradient {
      0% {
          background-position: 200% 0;
      }
      100% {
          background-position: -200% 0;
      }
  }
  &:hover{
    padding: 0px;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ImageContainer = styled.div<lineType>`
  width: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;
`
const ImageGalleryTrio = styled.img`
  width: 100%;
  object-fit: contain;
  transition: ease-in-out 2s ;
  &:hover{
    scale: 1.2;
    cursor: pointer;
  }
  `
const TagContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 7;
  height: 35px;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  bottom: 10%;
  color: white;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, black, #3c3d3c, #131313);
  background-size: 200% auto;
  animation: Gradient 3s ease infinite;
  @keyframes Gradient {
      0% {
          background-position: 200% 0;
      }
      100% {
          background-position: -200% 0;
      }
  }
  .content{
    opacity: 1;
  }
  &:hover{
    scale: 1.2;
    cursor: pointer;
  }
`

export const GalleryVeticalPhotoTrio = ({photosTriPack, defaultImgUrl, radius, maximumWidth}:GalleryTrioPhotos) => {

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
    <ImageGalleryTrioContainer maximumWidth={maximumWidth}>
      
      {loading? (
        <>
          {[...Array(3)].map((_, index) => (
            <SkeletonLoader key={index} style={{ width: '33%', height: '100%', borderRadius: '10px' }} />
          ))}
        </>
      ) : photosTriPack?.map((photo, index)=>{
        return (
              <Loader radius={radius} key={index}>
                <ImageContainer line={photo.line}>
                  {photo.tag && 
                    <TagContainer>
                      <p className="content">{photo.tag}</p>
                    </TagContainer>
                  }
                  <ImageGalleryTrio loading="lazy" src={photo.url} alt={photo.name} onError={(e)=>showDefaulImg(e)} /> 
                </ImageContainer>
              </Loader>
           )
        })
      }

      <figcaption className="caption">Baloncesto niños mixto villavicencio</figcaption>
    </ImageGalleryTrioContainer>
  )
}