'use client'
import styled from 'styled-components'
import WrapperRowRouterRedirect from './WrapperRowRenderer'

const ButtonContact = styled.button`
    background-color: #ff6d00;
    height: 50px;
    border-radius: 25px;
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`

export const ContactButton = ({children}) => {
  return (
    <WrapperRowRouterRedirect baseUrl='' route='/contact'>

      <ButtonContact>
          {children}
      </ButtonContact>
    </WrapperRowRouterRedirect>
  )
}
