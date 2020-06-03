import React from 'react';
import styles from './Preventions.module.css';
import Grid from '@material-ui/core/Grid';
import Hand from '../../icons/hand.svg';
import Mask from '../../icons/mask.svg';
import Disinfect from '../../icons/disinfection.svg';

const Preventions = () => {
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.content}>
                <Grid item xs={12} md={12} className={styles.preventions}>
                    <h2>Preventions</h2>
                </Grid>
                <Grid item xs={4} md={4} className={styles.washhands}>
                    <img src={Hand} className={styles.handicon} />
                    <h4>Wash Hands</h4>
                </Grid>
                <Grid item xs={4} md={4} className={styles.usemask}>
                    <img src={Mask} className={styles.maskicon} />
                    <h4>Use Mask</h4>
                </Grid>
                <Grid item xs={4} md={4} className={styles.disinfect}>
                    <img src={Disinfect} className={styles.disinfecticon} />
                    <h4>Disinfect</h4>
                </Grid>
            </Grid>
        </div>
    );
}

export default Preventions;
