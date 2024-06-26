'use client'
import React from 'react'
import styled from 'styled-components'
import WrapperRowRouterRedirect from './WrapperRowRenderer'

interface navBarData {
  title: string,
  href: string,
}

interface titleProps {
  customSize?: string,
  color?: string,
  fontFamilyType?: string,
  weight?: number,
  data: Array<navBarData>
  hoverColor?: string, 
  isMobile?: boolean,
  onClose?: () => void,
}

interface listPropsContainer {
  isMobile?: boolean,
}

const OverlayMobile = styled.div<listPropsContainer>`
  height: 100%;
  
  @media (max-width: 768px) {
    display: ${props => props.isMobile ? props.isMobile && 'flex' : 'none'};
    width: 100%;
    position: absolute;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `

const ListNavBar = styled.ul<listPropsContainer>`
    display: flex;
    flex-direction: row;
    z-index: 5;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
      display: ${props => props.isMobile ? props.isMobile && 'flex' : 'none'};
      flex-direction: column;
      align-items: center;
      top: 0;
      left: 0;
      position: absolute;
      height: 100vh;
      width: 100%;
      justify-content: center;
    }
  `
const ListItemNavBar = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    height: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      height: unset;
      gap: 20px;
    }
    .underline-compose{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        border-bottom: 4px solid #E84C1A;
        border-radius: 4px;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        height: unset;
      }
    }
`

const SubTitleNavBar = styled.h1<titleProps>`
    display: flex;
    font-family:  ${props => props.fontFamilyType ? props.fontFamilyType : "Londrina Solid, sans-serif"};
    font-weight: ${props => props.weight ? props.weight : 800};
    font-style: normal;
    font-size: ${props => props.customSize ? props.customSize : '68px'};
    color: ${props => props.color ? props.color : '#fff'};
    text-transform: capitalize;
    transition: .8s;
    &:hover{
      color: ${props => props.hoverColor ? props.hoverColor : '#fff'};
      text-decoration: none;
    }
`

export const NavBarElements = ({customSize, color, fontFamilyType, weight, hoverColor, data, isMobile, onClose}: titleProps) => {
  return (
    <ListNavBar isMobile={isMobile}>
      <OverlayMobile onClick={()=>onClose()} isMobile={isMobile}>
        <ListItemNavBar>
            {data.map(element=>{
              return (
                <WrapperRowRouterRedirect onClose={onClose} key={element.title} route={element.href} dynamicClasses='underline-compose'>
                  <SubTitleNavBar  data={data} customSize={customSize} color={color} fontFamilyType={fontFamilyType} weight={weight} hoverColor={hoverColor}>
                    {element.title}
                  </SubTitleNavBar>
                </WrapperRowRouterRedirect>
              )
            })}
        </ListItemNavBar>
      </OverlayMobile>
    </ListNavBar>
  )
}

