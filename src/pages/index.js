import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import Bree2 from '../fonts/Bree-Bold.woff2'
import Bree1 from '../fonts/Bree-Bold.woff'

import Futura2 from '../fonts/Futura-CondensedMedium.woff2'
import Futura1 from '../fonts/Futura-CondensedMedium.woff'

import Image from '../components/image'
import SEO from '../components/seo'

import IconLn from '../images/icon-ln.svg'
import IconTw from '../images/icon-tw.svg'
import IconMd from '../images/icon-md.svg'

const ImageWrapper = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    & .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
    }
`

const Content = styled('main')`
    position: relative;
    z-index: 10;
    display: grid;
    padding: 40px 0;
    grid-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 16px 1fr 1fr 16px;

    grid-template-areas:
        '. title title .'
        '. content content .'
        '. social social .';

    @media screen and (min-width: 840px) {
        grid-template-columns: 3% 4fr 3fr 4fr 3%;
        grid-template-areas:
            '. . title title .'
            '. . content content .'
            '. . social social .';
    }
`

const Title = styled('h1')`
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    font-family: 'CustomBree', sans-serif;
    font-size: 62px;
    text-align: left;
    margin-bottom: 0;
    grid-area: title;
`

const Social = styled('div')`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    grid-area: social;
`
const IconImg = styled('img')`
    height: 24px;
    width: 24px;
    display: block;
    margin-bottom: 0;
`
const Link = styled('a')`
    width: 36px;
    height: 36px;
    border-radius: 50px;
    margin-left: 8px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 #fff;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 0.4;
    &:hover {
        opacity: 0.8;
    }
`

const ContentBlock = styled('div')`
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    color: #484848;
    grid-area: content;
    font-family: 'CustomFutura', sans-serif;
    font-size: 22px;
    & h3 {
        margin-top: 0;
    }
    & p:last-child {
        margin-bottom: 0;
    }
`

const IndexPage = () => {
    return (
        <React.Fragment>
            <Global
                styles={css`
                    @font-face {
                        font-family: 'CustomBree';
                        src: url(${Bree2}) format('woff2'),
                            url(${Bree1}) format('woff');
                        font-weight: normal;
                        font-style: normal;
                    }

                    @font-face {
                        font-family: 'CustomFutura';
                        src: url(${Futura2}) format('woff2'),
                            url(${Futura1}) format('woff');
                        font-weight: normal;
                        font-style: normal;
                    }
                `}
            />
            <SEO title="Home" keywords={[`Anna King`]} />
            <ImageWrapper>
                <Image />
            </ImageWrapper>
            <Content>
                <Title>Anna King</Title>
                <ContentBlock>
                    <h3>Mother. Marketing Executive. Nonprofit Consultant.</h3>
                    <p>
                        Former Chief Marketing Officer serving charities across
                        North America.
                    </p>
                    <p>2018 City of Victoria municipal election candidate.</p>
                    <p>
                        Currently embracing a season of radical rest as
                        housewife and mother.
                    </p>
                    <p>Passionate about people, adventure, and simplicity.</p>
                    <p>
                        Enjoys collaborative projects with like-minded
                        individuals and organizations.
                    </p>
                    <p>
                        Writing and serving you from the unceded territory of
                        the Lekwungen speaking peoples, the Songhees and
                        Esquimalt First Nations where I live, work, and play.
                    </p>
                </ContentBlock>
                <Social>
                    <Link
                        href="https://www.linkedin.com/in/annakyyj/"
                        target="_blank"
                    >
                        <IconImg src={IconLn} />
                    </Link>
                    <Link href="https://twitter.com/annakyyj/" target="_blank">
                        <IconImg src={IconTw} />
                    </Link>
                    <Link href="https://medium.com/@annakyyj" target="_blank">
                        <IconImg src={IconMd} />
                    </Link>
                </Social>
            </Content>
        </React.Fragment>
    )
}

export default IndexPage
