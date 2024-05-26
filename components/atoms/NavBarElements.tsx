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
}

const ListNavBar = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 768px) {
      display: none;
    }
    `
const ListItemNavBar = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

const SubTitleNavBar = styled.h1`
    font-family: ${props => props.fontFamilyType ? props.fontFamilyType : "Londrina Solid, sans-serif"} ;
    font-weight: ${props => props.weight ? props.weight : 800};
    font-style: normal;
    font-size: ${props => props.customSize ? props.customSize : '68px'};
    color: ${props => props.color ? props.color : '#fff'};
    text-transform: uppercase;
    transition: .8s;
    &:hover{
      color: ${props => props.hoverColor ? props.hoverColor : '#fff'};
      text-decoration: none;
    }
`

export const NavBarElements = ({customSize, color, fontFamilyType, weight, hoverColor, data}: titleProps) => {
  return (
    <ListNavBar>
      <ListItemNavBar>
          {data.map(element=>{
            return (
              <WrapperRowRouterRedirect key={element.title} route={element.href}>
                <SubTitleNavBar  customSize={customSize} color={color} fontFamilyType={fontFamilyType} weight={weight} hoverColor={hoverColor}>
                  {element.title}
                </SubTitleNavBar>
              </WrapperRowRouterRedirect>
            )
          })}
      </ListItemNavBar>
    </ListNavBar>
  )
}

