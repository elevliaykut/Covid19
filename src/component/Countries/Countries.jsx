import React, { Components, Component } from 'react';
import styles from './Countries.module.css';
import { getCountries } from '../../api/TotalValues';

class Countries extends Component {
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
            <div className={styles.header}>
                <div className={styles.totalcard}>
                    <label>{this.state.countries.length} Countries</label>
                </div>
            </div>
        )
    }
}
export default Countries