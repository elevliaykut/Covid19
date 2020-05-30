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
                <Grid container spacing={3}>
                    <Grid item xs="12" md="12" className={styles.header}>
                        <Grid item xs="1" md="1" className={styles.logo}>
                            <h2>SAH</h2>
                        </Grid>
                        <Grid item xs="4" md="4" className={styles.stayathome}>
                            <h3>Stay At Home</h3>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Header
