import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {useLayoutEffect, useRef} from 'react';
import styled from 'styled-components';
import DrawSvg from './DrawSvg';

const Roadmap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];

    gsap.registerPlugin(ScrollTrigger);

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el, index) => {
            t1.fromTo(
                el.childNodes[0],
                {
                    y: '0',
                },
                {
                    y: '-30%',
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: 'top center+=200px',
                        end: 'bottom center',
                        scrub: true,
                    },
                },
            );
        });

        return () => {};
    }, []);

    return (
        <Section id="roadmap">
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadmapItem
                        addToRefs={addToRefs}
                        title="Grand Opening"
                        subtext="Join us for the grand opening of our new project. Expect surprises and exclusive content."
                    />
                    <RoadmapItem
                        addToRefs={addToRefs}
                        title="Great Benefits"
                        subtext="Enjoy exclusive benefits as a member of our community. From special events to early access to new features."
                    />
                    <RoadmapItem
                        addToRefs={addToRefs}
                        title="Early Access"
                        subtext="Get early access to our new releases and updates. Be the first to experience our latest innovations."
                    />
                    <RoadmapItem
                        addToRefs={addToRefs}
                        title="New Merch"
                        subtext="Check out our new merchandise collection. Exclusive designs and high-quality materials."
                    />
                    <RoadmapItem
                        addToRefs={addToRefs}
                        title="Holders Ranking"
                        subtext="Participate in our holders ranking for a chance to win exclusive rewards and recognition."
                    />
                </Items>
            </Container>
        </Section>
    );
};

//Single Roadmap Item
const RoadmapItem = ({title, subtext, addToRef}) => {
    return (
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    );
};

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    position: relative;
`;

const Title = styled.h1`
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 500;
    color: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid #202020;
    width: fit-content;

    @media (max-width: 40em) {
        font-size: 2rem;
    }
`;

const Container = styled.div`
    width: 70%;
    height: 200vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 64em) {
        width: 80%;
    }

    @media (max-width: 48em) {
        width: 90%;
    }
`;

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Items = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 48em) {
        width: 90%;
    }

    & > *:nth-of-type(2n + 1) {
        justify-content: start;

        @media (max-width: 48em) {
            justify-content: center;
        }

        div {
            border-radius: 50px 0 50px 0;
            text-align: right;

            @media (max-width: 48em) {
                border-radius: 0 50px 0 50px;
                text-align: left;

                p {
                    border-radius: 0 40px 0 40px;
                }
            }
        }
        p {
            border-radius: 40px 0 40px 0;
        }
    }

    & > *:nth-of-type(2n) {
        justify-content: end;

        @media (max-width: 48em) {
            justify-content: center;
        }

        div {
            border-radius: 0 50px 0 50px;
            text-align: left;
        }

        p {
            border-radius: 0 40px 0 40px;
        }
    }
`;

const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 48em) {
        justify-content: flex-end !important;
    }
`;

const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid #202020;

    @media (max-width: 48em) {
        width: 70%;
    }
`;

const Box = styled.p`
    height: fit-content;
    color: #202020;
    padding: 1rem;
    position: relative;
    border: 1px solid #202020;
`;

const SubTitle = styled.span`
    display: block;
    font-size: 2rem;
    text-transform: capitalize;
    color: #202020;

    @media (max-width: 40em) {
        font-size: 1.25rem;
    }
`;

const Text = styled.span`
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
    margin: 0.5rem 0rem;
    text-transform: capitalize;
    color: #202020;

    @media (max-width: 40em) {
        font-size: 0.75rem;
    }
`;

export default Roadmap;
