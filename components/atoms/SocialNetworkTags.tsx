'use client'

import styled from "styled-components"

const SocialNetworkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    .icons{
        &:hover{
            cursor: pointer;
            color: #E84C1A!important;
            fill: #E84C1A;
        }
    }
`

export const SocialNetworkTags = ({children, networkLink}) => {
  return (
    <SocialNetworkContainer>
        <a href={networkLink}>
            {children}
        </a>
    </SocialNetworkContainer>
  )
}
