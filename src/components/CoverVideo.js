import React from 'react';
import Gif from '../assets/reveal_full.gif';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '40vh',
        },
    },
}));

const CoverVideo = () => {
    const classes = useStyles();

    return (
        <div className={classes.containver}>
            <img src={Gif} alt="image" width="50%" height="50%" />
        </div>
    );
};

export default CoverVideo;
