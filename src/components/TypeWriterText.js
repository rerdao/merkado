import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 4rem;
    text-transform: capitalize;
    width: 80%;
    color: '#202020';
    align-self: flex-start;

    span {
        font-family: 'Inconsolata', sans-serif;
        font-weight: bolder;
    }

    .text-1 {
        color: blue;
    }

    .text-2 {
        color: orange;
    }

    .text-3 {
        color: red;
    }

    @media (max-width: 70em) {
        font-size: 2rem;
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
        font-size: 2rem;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const SubTitle1 = styled.h3`
    font-size: 2.25em;
    text-transform: capitalize;
    color: '#00000';
    font-weight: 600;
    margin-bottom: 1rem;
    width: 100%;
    align-self: flex-start;

    @media (max-width: 40em) {
        font-size: 1rem;
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
`;
const SubTitle2 = styled.h3`
    font-size: 1.25em;
    text-transform: capitalize;
    color: '#00000';
    font-weight: 600;
    margin-bottom: 1rem;
    width: 100%;
    align-self: flex-start;

    @media (max-width: 40em) {
        font-size: 1rem;
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
`;
const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;

        button {
            margin: 0 auto;
        }
    }
`;

const TypeWriterText = () => {
    return (
        <>
            <Title>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={typewriter => {
                        typewriter
                            .typeString("<span class='text-1'>CREATE</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("<span class='text-2'>DISCOVER</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("<span class='text-3'>EXPLORE</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
                Merkado
            </Title>
            <SubTitle1>NFT Marketplace</SubTitle1>
            <SubTitle2>Trade? Collect? Mint?</SubTitle2>
        </>
    );
};

export default TypeWriterText;
