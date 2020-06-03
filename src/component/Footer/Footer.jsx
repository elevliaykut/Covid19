import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.footer}>
                <Grid item={12} md={12} className={styles.title}>
                    <h3>A project by Aykut ELEVLİ</h3>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
