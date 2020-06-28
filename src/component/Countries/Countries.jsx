import React, { Components, Component } from 'react';
import styles from './Countries.module.css';
import { getCountries, countryDetails } from '../../api/TotalValues';
import Time from '../../icons/clock.svg';

class Countries extends Component {
    constructor() {
        super();
        this.state = {
            countries: '',
            countryDetails: [],
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
        countryDetails().then(res => {
            this.setState({
                countryDetails: res,
                loadded: true,
            })
        });
    }
    render() {
        if (!this.state.loadded) {
            return <div>Loading</div>
        }
        return (  
            <>
                <div className={styles.countries}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h5>Covid19</h5>
                        </div>
                        <div className={styles.totalcard}>
                            <label>{this.state.countryDetails.length} Regions</label>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className="container">
                            <div className="row">
                                {this.state.countryDetails.map(countryDetail => (
                                    <div className="col-6">
                                        <div className={styles.cards}>
                                            <div className={styles.cardsheader}>
                                                <h4>{countryDetail.countryRegion},{countryDetail.provinceState}</h4>
                                            </div>
                                            <div className={styles.cardsbody}>
                                                <div className="row">
                                                    <div className={styles.confirmed}>
                                                        <label className={styles.confirmedcircle}></label>
                                                        <label className={styles.confirmedtitle}>Confirmed:</label>
                                                        <label className={styles.confirmedvalue}>{countryDetail.confirmed}</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className={styles.recovered}>
                                                        <label className={styles.recoveredcircle}></label>
                                                        <label className={styles.recoveredtitle}>Recovered:</label>
                                                        <label className={styles.recoveredvalue}>{countryDetail.recovered}</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className={styles.deaths}>
                                                        <label className={styles.deathscircle}></label>
                                                        <label className={styles.deathstitle}>Deaths:</label>
                                                        <label className={styles.deathsvalue}>{countryDetail.deaths}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.cardsfooter}>
                                                <div className="row">
                                                    <div className={styles.date}>
                                                        <img src={Time} className={styles.timeicon} />
                                                        <label className={styles.datetitle}>Date</label>
                                                        <label className={styles.datevalue}>{new Date(countryDetail.lastUpdate).toDateString()}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Countries