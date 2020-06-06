import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Grid container item xs="12" md="12" className={styles.header}>
                    <Grid item xs="4" md="4" className={styles.logo}>
                        <h3>Get to know about COVID-19.</h3>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Header
