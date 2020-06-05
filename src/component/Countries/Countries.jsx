import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Countries.module.css';
import { fetchCountry } from '../../api';

const Countries = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountry());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <div>
            <Grid container item xs={12} md={12} className={styles.content}>
                <Grid item xs={8} md={8} className={styles.title}>
                    <h3>ALSO SEE</h3>
                </Grid>
                <Grid item xs={4} md={8} className={styles.total}>
                    <h3>{fetchedCountries.length}</h3>
                </Grid>
                <Grid item xs={12} md={12} className={styles.countries}>
                    {fetchedCountries.map((country, i) => <div key={i} value={country}>{country}</div>)}
                </Grid>
            </Grid>
        </div>
    );
}

export default Countries;
