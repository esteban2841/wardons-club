import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import MenuIcon from '@rsuite/icons/Menu';
import { NavBarElements } from '../atoms/NavBarElements';
import WrapperRowRouterRedirect from '../atoms/WrapperRowRenderer';


const navBarSections = [
    {title: 'inicio', href: '/'},
    {title: 'entrenadores', href: '/coaches'},
    {title: 'servicios', href: '/services'},
    {title: 'galeria', href: '/gallery'},
    {title: 'contacto', href: '/contact'},
  ]

const NavBar = ({baseUrl}) => {
    const [ isScrolledThenChangeColor, setIsScrolledThenChangeColor ] = useState(false)
    const [ toggleNavBarMobile, setToggleNavBarMobile ] = useState(false)

    
    useEffect(()=>{
        const handleChangeColorOnNav = () => window.scrollY >= 30 ? setIsScrolledThenChangeColor(true) : setIsScrolledThenChangeColor(false)
        window.addEventListener('scroll', handleChangeColorOnNav)
    }, [window.scrollY])

    const handleToggleMobileNavBar = ()=>{
        setToggleNavBarMobile(!toggleNavBarMobile)
    }
    
    return (
        <div class>

            <NavBarContainer $opacity={isScrolledThenChangeColor} >
                <WrapperRowRouterRedirect baseUrl='' route='/' >
                    <Image className='wardons-logo' src='/assets/images/wardons-logo-mobile.png' alt="logo-mobile" width={60} height={60}/>
                </WrapperRowRouterRedirect>
                <IconContainer onClick={handleToggleMobileNavBar} >
                    <MenuIcon className='menu-icon' fill='#E84C1A' width={'none'} height={'none'}/>
                </IconContainer>
                <NavBarElements baseUrl={baseUrl} data={navBarSections} isMobile={toggleNavBarMobile} onClose={handleToggleMobileNavBar} customSize='20px' color='#fff' hoverColor={'#E84C1A'} weight={600} fontFamilyType='"Julee", cursive'/>
            </NavBarContainer>
        </div>
    )
}

export default NavBar
