import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Footer.module.css';
import Github from '../../icons/github.svg';

const Footer = () => {
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.footer}>
                <Grid item={6} md={6} className={styles.title}>
                    <h3>A project by Aykut ELEVLİ</h3>
                </Grid>
                <Grid item={2} md={2} className={styles.githubLogo}>
                    <img src={Github} className={styles.github}/>
                    <h5>Github</h5>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
