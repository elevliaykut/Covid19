import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Grid container spacing={3} className={styles.header}>
                    <Grid item xs="4" md="4" className={styles.warning}>
                        <h1>Stay At Home</h1>

                    </Grid>
                    <Grid item xs="4" md="4" className={styles.logo}>
                        <h1>Covid19.</h1>
                    </Grid>
                    <Grid item xs="4" md="4" className={styles.county}>
                        <h3>Country</h3>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Header
