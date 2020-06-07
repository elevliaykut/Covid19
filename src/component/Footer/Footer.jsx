import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Footer.module.css';
import Github from '../../icons/github.svg';
import Linkedin from '../../icons/linkedin.svg';
import WebSite from '../../icons/website.svg';
import Medium from '../../icons/medium.svg';

const Footer = () => {
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.footer}>
                <Grid item xs={4} md={4} className={styles.title}>
                    <h3>A project by Aykut ELEVLİ</h3>
                </Grid>
                <Grid item xs={2} md={2} className={styles.githubLogo}>
                    <img src={Github} className={styles.github}/>
                    <h4>Github</h4>
                </Grid>
                <Grid item xs={2} md={2} className={styles.linkedinLogo}>
                    <img src={Linkedin} className={styles.linkedin}/>
                    <h4>Linkedin</h4>
                </Grid>
                <Grid item xs={2} md={2} className={styles.mediumLogo}>
                    <img src={WebSite} className={styles.medium}/>
                    <h4>Medium</h4>
                </Grid>
                <Grid item xs={2} md={2} className={styles.websiteLogo}>
                    <img src={WebSite} className={styles.website}/>
                    <h4>WebSite</h4>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
