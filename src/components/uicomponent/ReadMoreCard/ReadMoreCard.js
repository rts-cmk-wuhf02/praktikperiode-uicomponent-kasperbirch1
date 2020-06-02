import React from 'react'
import styled from 'styled-components'
const StyledReadMoreCard = styled.article`
    padding: 1rem;
    border-radius: 1rem;
    background-color: white;
    div {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        img {
            display: block;
            border-radius: 50%;
            height: 2rem;
            width: 2rem;
            object-fit: cover;
            object-position: center;
            margin-right: .5rem;
        }
    }
    p {
        margin-bottom: 2rem;
    }
    a {
        text-decoration: none;
        padding: .5rem .75rem;
        color: #358ED7;
        background-color: transparent;
        border: 1px solid #EBEBEB;
        border-radius: 15px;
    }
`

const ReadMoreCard = ({ profileImg }) => {
    return (
        <StyledReadMoreCard>
            <div>
                <img src={profileImg} alt="" />
                <h2>THE NEW YORK TIMES</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </p>
            <a href="#">READ MORE</a>
        </StyledReadMoreCard>
    )
}

export default ReadMoreCard
