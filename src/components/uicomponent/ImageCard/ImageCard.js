import React from 'react'
import styled from 'styled-components'
const StyledImageCard = styled.article`
    margin: .5rem;
    border-radius: 1rem;
    background-color: white;
    img {
        width: 100%;
        display: block;
        margin-bottom: 1rem;
    }
    div {
        padding:.5rem;
        font-weight: bold;
        letter-spacing: 0;
        h3 {
            text-transform: uppercase;
            font-size: .8rem; 
            color: #33439B;
            margin-bottom: 1rem;
        }
        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        p {
            font-weight: 400;
            color: #7B8591;
        }
    }
`

const ImageCard = ({ title, category, text, img }) => {
    return (
        <StyledImageCard>
            <img src={img} alt={title} />
            <div>
                <h3>{category}</h3>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </StyledImageCard>
    )
}

export default ImageCard
