import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaHtml5, FaCss3Alt, FaReact, FaBeer } from 'react-icons/fa'
import SEO from "../components/seo"
import ImageCard from '../components/uicomponent/ImageCard/ImageCard'
import ImageCardGallery from '../components/uicomponent/ImageCardGallery/ImageCardGallery'
import IconInfoCard from '../components/uicomponent/IconInfoCard/IconInfoCard'
import CollectionCard from '../components/uicomponent/CollectionCard/CollectionCard'
import MustSeeCard from '../components/uicomponent/MustSeeCard/MustSeeCard'
import LatestNews from '../components/uicomponent/LatestNews/LatestNews'
import placeholderImg from '../images/Rectangle52.png'

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
  // console.log("images", images);


  return (
    <>
      <SEO title="Home" />
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <ImageCard img={placeholderImg} title="Surfing in Maldives" category="TRAVEL" text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside." />
        <ImageCardGallery span="span 2" images={images} title="Outdoor Experience" category="LEISURE" text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside." />
      </section >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '1rem' }}>
        <IconInfoCard title="ON-TIME DELIVERY" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaHtml5 />} backgroundColor="#005AEE" />
        <IconInfoCard title="PARCELS" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaCss3Alt />} backgroundColor="#FFA767" />
        <IconInfoCard title="QUALITY CHECK" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaReact />} backgroundColor="#0AACDC" />
        <IconInfoCard title="CUSTOMER SERVICE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit " icon={<FaBeer />} backgroundColor="#597AEF" />
      </section>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <CollectionCard name="Off-the-grid experiences" author="Melanie S" profileImg={images[5].fluid.src} background={images[1].fluid.src} collection="10" />
        <CollectionCard name="Shapes, triangles &amp; fashion" author="Saraha F" profileImg={images[2].fluid.src} background={images[2].fluid.src} collection="1" />
        <CollectionCard name="In-depth architecture" author="Benhour" profileImg={images[1].fluid.src} background={images[3].fluid.src} collection="123" />
        {/* new row */}
        <MustSeeCard span="span 2" title="Must see places for summer" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus." author="THE NEW YORK TIMES" profileImg={images[1].fluid.src} background={placeholderImg} />
        <LatestNews />
      </section>
    </>
  )
}

export default IndexPage
