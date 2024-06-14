'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import MenuIcon from '@rsuite/icons/Menu';
import { NavBarElements } from '../atoms/NavBarElements';

const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 70px;
    padding: 20px;
    z-index: 10;
    transition: 1s ease;
    background-color: rgb(20,22,23, ${props => props.$opacity ? 0.5 : 1});
    .wardons-logo{
        cursor: pointer;
        &:hover{
            transform: scale(1.05);
        }
    }

`
const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;

    svg path{
        filter: drop-shadow(inset 4px 6px 1px rgb(5, 5, 5)); 
    }
    :hover{
        transform: rotate(-45deg);
    }
    @media (min-width: 768px) {
        display: none;
    }
`

const navBarSections = [
    {title: 'inicio', href: '/'},
    {title: 'entrenadores', href: '/coaches'},
    {title: 'servicios', href: '/services'},
    {title: 'galeria', href: '/gallery'},
    {title: 'contacto', href: '/contact'},
  ]

const NavBar = () => {
    const [ isScrolledThenChangeColor, setIsScrolledThenChangeColor ] = useState(false)

    
    useEffect(()=>{
        const handleChangeColorOnNav = () => window.scrollY >= 30 ? setIsScrolledThenChangeColor(true) : setIsScrolledThenChangeColor(false)
        window.addEventListener('scroll', handleChangeColorOnNav)
    }, [window.scrollY])

    const toggleMobileNavBar = ()=>{

    }
    
    return (
        <HeaderContainer>

            <NavBarContainer $opacity={isScrolledThenChangeColor} >
                <Image className='wardons-logo' src='/assets/images/wardons-logo-mobile.png' alt="logo-mobile" width={60} height={60}/>
                <IconContainer onClick={toggleMobileNavBar} >
                    <MenuIcon className='menu-icon' fill='#E84C1A' width={'none'} height={'none'}/>
                </IconContainer>
                <NavBarElements data={navBarSections} customSize='20px' color='#fff' hoverColor={'#E84C1A'} weight={600} fontFamilyType='"Julee", cursive'/>
            </NavBarContainer>
        </HeaderContainer>
    )
}

export default NavBar
