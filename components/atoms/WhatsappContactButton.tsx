'use client'
import { SvgComponent } from '@/components/atoms/WhatsappSvg'
import styled from 'styled-components'

const WhatsappIconContainer = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 3;
    cursor: pointer;
`

const ownerPhoneNumber = process.env.OWNER_PHONE

export default function WhatsappContactButton() {
  return (
    <WhatsappIconContainer href={`https://wa.me/${ownerPhoneNumber}`}>
      <SvgComponent/>
    </WhatsappIconContainer>
  )
}
