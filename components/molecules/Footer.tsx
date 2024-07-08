'use client'

import styled from "styled-components"
import { SocialNetworkTags } from "../atoms/SocialNetworkTags"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
    color: #fff;
    justify-content: center;
    padding: 20px;
`
const FooterInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 5px;
    color: #fff;
    justify-content: center;
`
const SocialNetworksContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 10px;
    justify-content: center;
`
const FooterText = styled.p`
    font-family: 'Futura Md BT', sans-serif;
    font-size: 12px;
    font-weight: bold;
`

const Icons = [
    {
        name: 'facebook',
        icon: <FontAwesomeIcon className="icons" icon={faFacebookF} size="2x" style={{
            color: '#fff'
        }} />,
        ref: ''
    },
    {
        name: 'instagram',
        icon: <FontAwesomeIcon className="icons" icon={faInstagram} size="2x" style={{
            color: '#fff'
        }} />,
        ref: 'https://www.instagram.com/wardonsbasketballclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='

    },

]

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterInfoContainer>
            <FooterText>
                +57 311 8139299
            </FooterText>
            <FooterText>
                fredy.villota@unillanos.edu.co
            </FooterText>
        </FooterInfoContainer>
        <SocialNetworksContainer>
        {
            Icons.map(icon=>{
                return <SocialNetworkTags key={icon.name} networkLink={icon.ref}>
                        {icon.icon}
                    </SocialNetworkTags>
               
            })
        }
        </SocialNetworksContainer>
        <FooterInfoContainer>
            <a href="https://esteban-puentes.vercel.app" className="no-underline no-decoration">
                <FooterText>
                    Created By Esteban Puentes full stack Web Developer
                </FooterText>
            </a>
            <FooterText>
                Copyright © 2024 All right reserved.
            </FooterText>
        </FooterInfoContainer>
        
    </FooterContainer>
  )
}
