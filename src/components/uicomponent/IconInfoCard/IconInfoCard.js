import React from 'react'
import styled from 'styled-components'
const StyledIconInfoCard = styled.article`
    margin: .5rem;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #005AEE;
    color: white;
    svg {
        font-size: 4rem;
        display: block;
        margin-left: auto;
        margin-bottom: 1.5rem;
    }
    h2 {
        height: 2rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    p {
    }
`


const IconInfoCard = ({ title, text, icon, backgroundColor }) => {
    return (
        <StyledIconInfoCard style={{ backgroundColor: backgroundColor }} >
            {icon}
            <h2>{title}</h2>
            <p>{text}</p>
        </StyledIconInfoCard >
    )
}

export default IconInfoCard
