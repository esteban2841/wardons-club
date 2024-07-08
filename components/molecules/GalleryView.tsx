'use client'
import styled from "styled-components"

const GalleryViewContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 30px;
  box-sizing: border-box;
`

export const GalleryView = ({children}) => {
  return (
    <GalleryViewContainer>
        {children}
    </GalleryViewContainer>
  )
}
