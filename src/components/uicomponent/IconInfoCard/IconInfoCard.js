import React from 'react'
import styled from 'styled-components'
const StyledIconInfoCard = styled.article`
    margin: .5rem;
    background-color: white;
`


const IconInfoCard = ({ title, text, icon }) => {
    return (
        <StyledIconInfoCard>
            {icon}
            <h2>{title}</h2>
            <p>{text}</p>
        </StyledIconInfoCard>
    )
}

export default IconInfoCard
