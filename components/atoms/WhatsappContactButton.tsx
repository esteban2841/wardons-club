'use client'
import { SvgComponent } from '@/components/atoms/WhatsappSvg'
import styled from 'styled-components'

const WhatsappIconContainer = styled.a`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 20px;
    right: 20px;
    z-index: 3;
    cursor: pointer;
    transition: ease 0.5s;
    @media (max-width: 768px) {
        bottom: 4px;
        right: 4px;
    }
    .svg{
        :hover{
            transform: scale(1.05);
        }

    }
`

const ownerPhoneNumber = process.env.OWNER_PHONE

export default function WhatsappContactButton() {
  return (
    <WhatsappIconContainer href={`https://wa.me/${ownerPhoneNumber}`}>
      <SvgComponent className='svg' width={126} height={126}/>
    </WhatsappIconContainer>
  )
}
