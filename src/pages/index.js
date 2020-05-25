import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaHtml5, FaCss3Alt, FaReact, FaBeer } from 'react-icons/fa'

import SEO from "../components/seo"
import ImageCard from '../components/uicomponent/ImageCard/ImageCard'
import ImageCardGallery from '../components/uicomponent/ImageCardGallery/ImageCardGallery'
import IconInfoCard from '../components/uicomponent/IconInfoCard/IconInfoCard'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      nodes {
        fluid {
          src
        }
      }
    }
  }
  `)
  const images = data.allImageSharp.nodes
  console.log("images", images);


  return (
    <>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
        <SEO title="Home" />
        <ImageCard img={images[4].fluid.src} title="Surfing in Maldives" category="TRAVEL" text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside." />
        <ImageCardGallery images={images} title="Outdoor Experience" category="LEISURE" text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside." />
      </section >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '1rem' }}>
        <IconInfoCard title="title" text="test" icon={<FaHtml5 />} />
        <IconInfoCard title="title" text="test" icon={<FaCss3Alt />} />
        <IconInfoCard title="title" text="test" icon={<FaReact />} />
        <IconInfoCard title="title" text="test" icon={<FaBeer />} />
      </section>
    </>
  )
}

export default IndexPage
