import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
const StyledImageCard = styled.article`
    grid-area: ImageCard;
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

const ImageCard = ({ }) => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulImageCard {
            nodes {
              title
              category
              img {
                fluid {
                  src
                }
              }
              text {
                content {
                  content {
                    value
                  }
                }
              }
            }
          }
    }
    `)
  const { category, img, text, title } = data.allContentfulImageCard.nodes[0]
  const cleanText = text.content[0].content[0].value.replace(/\u00a0/g, " ")

  return (
    <StyledImageCard>
      <img src={img.fluid.src} alt={title} />
      <div>
        <h3>{category[0]}</h3>
        <h2>{title}</h2>
        <p>{cleanText}</p>
      </div>
    </StyledImageCard>
  )
}

export default ImageCard
