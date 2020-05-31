import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './Header.module.css';
import { Typography } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Grid container item xs="12" md="12" className={styles.header}>
                    <Grid item xs="9" md="9" className={styles.logo}>
                        <h2>Covid19.</h2>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Header
