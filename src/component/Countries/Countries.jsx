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
            <>
                <div className={styles.countries}>
                    <div className={styles.header}>
                        <div className={styles.totalcard}>
                            <label>{this.state.countries.length} Countries</label>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className={styles.cards}>
                                        <div className={styles.cardsheader}>
                                            <h4>Turkey</h4>
                                        </div>
                                        <div className={styles.cardsbody}>
                                            <div className="row">
                                                <label className={styles.confirmedcircle}></label>
                                                <label className={styles.confirmedtitle}>Confirmed</label>
                                                <label className={styles.confirmedvalue}>121212121</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Countries