'use client'

import styled from "styled-components"

const ImageLoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    opacity: .7;
`
const ImageLoader = styled.img`
    width: 100%;
    height: 100vh;
`

export const HomeLoader = ({loadingImage}) => {
  return (
    <ImageLoaderContainer>
        <ImageLoader src={loadingImage} />
    </ImageLoaderContainer>
  )
}
