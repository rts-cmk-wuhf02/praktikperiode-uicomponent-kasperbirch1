import React, { useState } from 'react'
import { breakpoints } from '../../../theme/breakpoints'
import styled from 'styled-components'
const StyledImageCardGallery = styled.article`
    grid-column: span 2;
  @media ${breakpoints.md} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
    background-color: white;
    border-radius: 1rem;
    margin: .5rem;
    display: grid;
    grid-template-rows: 200px 1fr;
    grid-gap: 2rem;
    padding: 2rem;
   
    img {
        display: block;
        border-radius: 1rem;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    }
`

const ImageCardGalleryInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
        margin-left: auto;
        display: block;
        width: 100px;
        border-radius: 2rem;
        padding: .5rem 1rem;
        color: white;
        background-color: #005AEE;
        font-weight: bold;
        font-size: .8rem;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
    }
    h2 {
        text-transform: uppercase;
        font-size: 2.8rem; 
        font-weight: bold;
        margin-bottom: 1rem;
    }
    p {
        color: #7B8591;
        margin-bottom: 1rem;
    }
`
const StyledImageCardGalleryThumbnails = styled.div`
    height: 100px;
    display: grid;
    grid-template-columns: repeat(3,1fr); 
    grid-template-rows: 1fr; 
    grid-gap: 1rem;
    img {
        cursor: pointer;
    }
`

const ImageCardGallery = ({ title, category, text, images }) => {
    const [HeroImg, setHeroImg] = useState(images[5].fluid.src)
    return (
        <StyledImageCardGallery>
            <img src={HeroImg} alt={category} />
            <ImageCardGalleryInfo>
                <a href="/">{category}</a>
                <h2>{title}</h2>
                <p>{text}</p>
                <StyledImageCardGalleryThumbnails>
                    <img onClick={(e) => setHeroImg(e.target.src)} src={images[2].fluid.src} alt={category} />
                    <img onClick={(e) => setHeroImg(e.target.src)} src={images[3].fluid.src} alt={category} />
                    <img onClick={(e) => setHeroImg(e.target.src)} src={images[1].fluid.src} alt={category} />
                </StyledImageCardGalleryThumbnails>
            </ImageCardGalleryInfo>
        </StyledImageCardGallery>
    )
}

export default ImageCardGallery
