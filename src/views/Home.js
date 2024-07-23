import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import Features from '../components/Features';
import Carousel from 'react-material-ui-carousel';
import TypeWriterText from '../components/TypeWriterText';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    heading: {
        textAlign: 'center',
        marginTop: '40px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    marketBtn: {
        marginTop: 10,
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            width: '350px',
            fontSize: '1.1em',
        },
    },
    banner: {
        position: 'relative',
    },
    bannerimg: {
        maxWidth: '50%',
        borderRadius: '50px',
    },
    anchor: {
        position: 'absolute',
        bottom: '-15px',
        background: 'white',
        borderRadius: '100%',
        padding: '5px',
        width: '40px',
        border: '1px solid black',
        left: 'calc(50% - 20px)',
    },
    container: {
        width: '100%',
        minHeight: 'auto',
        margin: '0 auto',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            width: '100%',
            marginTop: '2rem',
        },
    },
    boxes: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function Home(props) {
    const classes = useStyles();

    const navigate = useNavigate();
    const [
        items,
        setItems,
    ] = React.useState([]);
    React.useEffect(() => {
        fetch('https://us-central1-entrepot-api.cloudfunctions.net/api/banners')
            .then(r => r.json())
            .then(r => {
                setItems(r);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var cards = [
        {
            title: 'BTC Flower',
            link: '/marketplace/btcflower',
            image: '/collections/btcflower/collection.jpg',
            content: (
                <>
                    The BTC Flower: Created back in 2017 by famous contemporary artist Ludo in the
                    physical world – now moving to digital form on the Internet Computer
                </>
            ),
        },
        {
            title: 'Cronic Wearables',
            link: '/marketplace/wearables',
            image: '/collections/cronic-wearables.jpg',
            content: (
                <>
                    We will be releasing the next set of Cronic NFTs - Cronic Wearables! These are a
                    seperate collection of NFTs that you can send to your Cronic!
                </>
            ),
        },
        {
            title: 'Rise of the Magni',
            link: '/',
            image: '/collections/rotm.jpg',
            content: (
                <>
                    Another blockchain game by ToniqLabs, the first set of Magni NFTs will be
                    available for sale exclusively on <strong>Entrepot.app</strong>. Coming 2022!
                </>
            ),
        },
    ];
    return (
        <>
            <div style={{width: '100%', display: 'block', position: 'relative'}}>
                <div
                    style={{
                        maxWidth: 1200,
                        margin: '10px auto',
                    }}
                >
                    <div className={classes.container}>
                        <div className={classes.boxes}>
                            <TypeWriterText />
                        </div>
                        <div className={classes.boxes}></div>
                    </div>

                    <h1 className={classes.heading}>Welcome to Merkado</h1>
                    <div className={classes.banner}>
                        {items.length > 0 ? (
                            <Carousel
                                style={{height: 175}}
                                autoPlay={true}
                                interval={5000}
                                animation={'slide'}
                                reverseEdgeAnimationDirection={true}
                                indicators={false}
                                navButtonsAlwaysVisible={false}
                            >
                                {items.map((item, i) => {
                                    if (item.link) {
                                        return (
                                            <a key={i} href={item.link}>
                                                <div
                                                    style={{
                                                        borderRadius: 20,
                                                        height: 175,
                                                        background:
                                                            "url('" +
                                                            item.image +
                                                            "') center center / cover no-repeat",
                                                    }}
                                                ></div>
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={i}
                                                style={{
                                                    borderRadius: 20,
                                                    height: 175,
                                                    background:
                                                        "url('" +
                                                        item.image +
                                                        "') center center / cover no-repeat",
                                                }}
                                            ></div>
                                        );
                                    }
                                })}
                            </Carousel>
                        ) : (
                            ''
                        )}
                    </div>

                    <Button
                        className={classes.marketBtn}
                        fullWidth
                        variant={'outlined'}
                        onClick={() => navigate(`/marketplace`)}
                        color={'primary'}
                        style={{fontWeight: 'bold', margin: '20px auto'}}
                    >
                        Explore the Marketplace
                    </Button>
                    <h1 className={classes.heading}>Latest Collections</h1>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        {cards.slice(0, 3).map((card, i) => {
                            return (
                                <Grid key={i} item md={4} style={{marginBottom: 20}}>
                                    <Card className={classes.root}>
                                        <a href={card.link}>
                                            <CardMedia
                                                className={classes.media}
                                                image={card.image}
                                                title={card.title}
                                            />
                                        </a>
                                        <CardContent>
                                            <h3>{card.title}</h3>
                                            <Typography
                                                variant="body1"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {card.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Features />
                </div>
            </div>
        </>
    );
}
