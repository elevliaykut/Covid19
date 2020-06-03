import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Content.module.css';
import Map from '../../icons/map.svg';
import Hand from '../../icons/hand.svg';
import Mask from '../../icons/mask.svg';
import Disinfect from '../../icons/disinfection.svg';

const Content = () => {
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.content}>
                <Grid item xs={7} md={7} className={styles.worldmap}>
                    <img src={Map} className={styles.map} />
                </Grid>
                <Grid item xs={3} md={3} className={styles.stayathome}>
                    <h2>📍Stay At Home</h2>
                    <Typography  color="textSecondary" className={styles.paragraph}>
                        Today is equal to day and night in the northern hemisphere.We say stay at 
                        home for our health while we will meet the spring.For healthy days, 
                        this Let's spend the days at home with our loved ones while maintaining the social distance.
                        I wish all the seasons and the days we will live in contact with nature are close.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Content;
