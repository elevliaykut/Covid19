import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Countries.module.css';

const Countries = (props) => {
    console.log(props)
    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.content}>
                <Grid item xs={8} md={8} className={styles.title}>
                    <h3>ALSO SEE</h3>
                </Grid>
                <Grid item xs={6} md={6}>
                    {props.countrydata}
                </Grid>
                <Grid item xs={6} md={6}>
                    sog
                </Grid>
            </Grid>
        </div>
    );
}

export default Countries;
