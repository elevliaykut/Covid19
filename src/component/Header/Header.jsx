import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Header.module.css';
import { getCountries } from '../../api/TotalValues';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            countries: ''
        }
    }

    componentDidMount() {
        getCountries().then(res => {
            this.setState({
                countries: res
            })
        })
    }
    render() {
        return (
            <div className="Header">
                <Grid container item xs="12" md="12" className={styles.header}>
                    <Grid item xs="6" md="6" className={styles.title}>
                        <h3>Get the know about COVID-19.</h3>
                    </Grid>
                    <Grid item xs="6" md="6" className={styles.countries}>
                        <a href="/countries">
                            <label className={styles.country}>{this.state.countries.length} Country</label>
                        </a>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Header
