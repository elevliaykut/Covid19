import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Content.module.css';
import Map from '../../icons/world.jpg'

const Content = () => {
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.content}>
                <Grid item xs={7} md={7}>
                </Grid>
                <Grid item xs={5} md={5} className={styles.stayathome}>
                    <h2>📍Stay At Home</h2>
                </Grid>
            </Grid>
        </div>
    );
}

export default Content;
