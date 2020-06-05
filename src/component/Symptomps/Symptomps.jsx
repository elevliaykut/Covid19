import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Symptomps.module.css';
import Headache from '../../icons/pain.svg';
import Cough from '../../icons/cough.svg';

function Symptomps() {
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.content}>
                <Grid item xs={12} md={12} className={styles.symptomps}>
                    <h2>Symptomps</h2>
                </Grid>
                <Grid item xs={4} md={4} className={styles.headache}>
                    <img src={Headache} className={styles.headacheicon}/>
                    <h4>Headache</h4>
                </Grid>
                <Grid item xs={4} md={4} className={styles.cough}>
                    <img src={Cough} className={styles.caughicon}/>
                    <h4>Cough</h4>
                </Grid>
            </Grid>
        </div>
    )
}

export default Symptomps
