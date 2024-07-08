'use client'

import styled from "styled-components"

type ImageUrl = {
    imageUrl?: string,
    colorBack?: string
}

const WallperContainer = styled.div<ImageUrl>`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.1;
    background:  url(${props => props.imageUrl ? (props.imageUrl) : 'https://cdn.nba.com/manage/2024/04/Play-In-2-wide___-1.png'});
`

export const WallperBackground = ({imageUrl, colorBack}: ImageUrl) => {
  return (
    <WallperContainer imageUrl={imageUrl}>
        
    </WallperContainer>
  )
}
