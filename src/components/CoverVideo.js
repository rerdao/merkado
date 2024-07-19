import React from 'react';
import styled from 'styled-components';
import GIF from '../assets/HomeGIF.gif';

const Container = styled.div`
    @media (max-width: 64em) {
        min-width: 40vh;
    }
`;

const CoverVideo = () => {
    return (
        <Container>
            <img src={GIF} alt="cover_gif" width="100%" height="100%" />
        </Container>
    );
};

export default CoverVideo;
