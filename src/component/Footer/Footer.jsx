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
                    <a href="https://github.com/elevliaykut">
                        <img src={Github} className={styles.github} />
                        <h4>Github</h4>
                    </a>
                </Grid>
                <Grid item xs={2} md={2} className={styles.linkedinLogo}>
                    <a href="https://www.linkedin.com/in/aykut-elevli/">
                        <img src={Linkedin} className={styles.linkedin} />
                        <h4>Linkedin</h4>
                    </a>
                </Grid>
                <Grid item xs={2} md={2} className={styles.mediumLogo}>
                    <a href="https://medium.com/@elevli.aykut.28">
                        <img src={Medium} className={styles.medium} />
                        <h4>Medium</h4>
                    </a>
                </Grid>
                <Grid item xs={2} md={2} className={styles.websiteLogo}>
                    <a href ="https://aykutelevli.me/">
                        <img src={WebSite} className={styles.website} />
                        <h4>WebSite</h4>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
