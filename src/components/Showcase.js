import React, {useRef} from 'react';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

import img1 from '../assets/banner/btcflower.jpg';
import img2 from '../assets/banner/bulls.jpg';
import img3 from '../assets/banner/canistore.jpg';
import img4 from '../assets/banner/cyman.jpg';
import img5 from '../assets/banner/dfinitydeck.jpg';
import img6 from '../assets/banner/donkey.jpg';
import img7 from '../assets/banner/frog.jpg';
import img8 from '../assets/banner/frog3d.png';
import img9 from '../assets/banner/floki.png';
import img10 from '../assets/banner/motoko2.jpg';
import ETH from '../assets/banner/spaceapes.jpg';

const Showcase = () => {
    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);

    return (
        <Section id="showcase">
            <Row direction="none" ref={Row1Ref}>
                <NftItem img={img1} number={852} price={1} passRef={Row1Ref} />
                <NftItem img={img2} number={223} price={1.2} passRef={Row1Ref} />
                <NftItem img={img3} number={564} price={1.5} passRef={Row1Ref} />
                <NftItem img={img4} number={102} price={3.5} passRef={Row1Ref} />
                <NftItem img={img5} number={234} price={2} passRef={Row1Ref} />
            </Row>

            <Row direction="reverse" ref={Row2Ref}>
                <NftItem img={img6} number={733} price={2.2} passRef={Row2Ref} />
                <NftItem img={img7} number={345} price={1.8} passRef={Row2Ref} />
                <NftItem img={img8} number={112} price={3.7} passRef={Row2Ref} />
                <NftItem img={img9} number={433} price={4} passRef={Row2Ref} />
                <NftItem img={img10} number={654} price={4.3} passRef={Row2Ref} />
            </Row>
        </Section>
    );
};

const NftItem = ({img, number = 0, price = 0, passRef}) => {
    let play = e => {
        passRef.current.style.animationPlayState = 'running';
    };

    let pause = e => {
        passRef.current.style.animationPlayState = 'paused';
    };

    return (
        <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
            <img src={img} alt="Merkados" />
            <Details>
                <div>
                    <span>Merkado</span> <br />
                    <h1>#{number}</h1>
                </div>

                <div>
                    <span>Price</span>
                    <Price>
                        <img src={ETH} alt="ETH" />
                        <h1>{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    );
};

const Section = styled.section`
    min-height: 100vh;
    width: 99vw;
    background-color: #f79010;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin: 10px 0 20px 0;

    & > *:first-child {
        animation-duration: 20s;

        @media (max-width: 30em) {
            animation-duration: 15s;
        }
    }

    & > *:last-child {
        animation-duration: 15s;

        @media (max-width: 30em) {
            animation-duration: 10s;
        }
    }
`;

const move = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
`;

const Row = styled.div`
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;
    display: flex;
    animation: ${move} linear infinite ${props => props.direction};
`;

const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    background-color: #fff;
    border-radius: 20px;
    cursor: pointer;

    @media (max-width: 48em) {
        width: 12rem;
    }

    @media (max-width: 30em) {
        width: 10rem;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    span {
        font-size: 0.875rem;
        color: rgba(32, 32, 32, 0.5);
        font-weight: 600;
        line-height: 1.5rem;
    }

    h1 {
        font-size: 1rem;
        color: #202020;
        font-weight: 600;

        @media (max-width: 30em) {
            font-size: 0.875rem;
        }
    }
`;

const Price = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 1rem;
        height: auto;
    }
`;

export default Showcase;
