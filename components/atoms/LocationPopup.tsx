'use client'

import styled from "styled-components"

const Popup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: black !important;
    h4{
        color: black;
        
    }
    p{
        color: black;
    }
`

export default function LocationPopup({title, description, coord}) {
  return (
    <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={`https://www.google.com/maps/search/?api=1&query=${coord[1]},${coord[0]}`}>Como llegar</a>
    </div>
  )
}
