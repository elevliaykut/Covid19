import React, { Components, Component } from 'react';
import styles from './Countries.module.css';
import { getCountries } from '../../api/TotalValues';
import Time from '../../icons/clock.svg';

class Countries extends Component {
    constructor() {
        super();
        this.state = {
            countries: '',
            loadded: false
        }
    }

    componentDidMount() {
        getCountries().then(res => {
            this.setState({
                countries: res,
                loadded: true
            })
        })
    }
    render() {
        if(!this.state.loadded) {
            return <div>Loading</div>
        }
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
                                                <div className={styles.confirmed}>
                                                    <label className={styles.confirmedcircle}></label>
                                                    <label className={styles.confirmedtitle}>Confirmed:</label>
                                                    <label className={styles.confirmedvalue}>121212121</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={styles.recovered}>
                                                    <label className={styles.recoveredcircle}></label>
                                                    <label className={styles.recoveredtitle}>Recovered:</label>
                                                    <label className={styles.recoveredvalue}>121212121</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={styles.deaths}>
                                                    <label className={styles.deathscircle}></label>
                                                    <label className={styles.deathstitle}>Deaths:</label>
                                                    <label className={styles.deathsvalue}>121212121</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardsfooter}>
                                            <div className="row">
                                                <div className={styles.date}>
                                                    <img src={Time} className={styles.timeicon} />
                                                    <label className={styles.datetitle}>Date</label>
                                                    <label className={styles.datevalue}>12.12.2020</label>
                                                </div>
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