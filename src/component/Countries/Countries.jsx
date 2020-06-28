import React, { Components, Component } from 'react';
import styles from './Countries.module.css';
import { getCountries, countryDetails } from '../../api/TotalValues';
import Time from '../../icons/clock.svg';
import Search from '../../icons/search.svg';

class Countries extends Component {
    constructor() {
        super();
        this.state = {
            countries: '',
            countryDetails: [],
            search: '',
            loadded: false
        }
    }

    renderCountry = country => {
        const { search } = this.state;

        if (search !== "" && country.countryRegion.toLowerCase().indexOf(search.toLowerCase()) === -1) {
            return null
        }
        return <div className="col-6">
            <div className={styles.cards}>
                <div className={styles.cardsheader}>
                    <h4>{country.countryRegion},{country.provinceState}</h4>
                </div>
                <div className={styles.cardsbody}>
                    <div className="row">
                        <div className={styles.confirmed}>
                            <label className={styles.confirmedcircle}></label>
                            <label className={styles.confirmedtitle}>Confirmed:</label>
                            <label className={styles.confirmedvalue}>{country.confirmed}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.recovered}>
                            <label className={styles.recoveredcircle}></label>
                            <label className={styles.recoveredtitle}>Recovered:</label>
                            <label className={styles.recoveredvalue}>{country.recovered}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.deaths}>
                            <label className={styles.deathscircle}></label>
                            <label className={styles.deathstitle}>Deaths:</label>
                            <label className={styles.deathsvalue}>{country.deaths}</label>
                        </div>
                    </div>
                </div>
                <div className={styles.cardsfooter}>
                    <div className="row">
                        <div className={styles.date}>
                            <img src={Time} className={styles.timeicon} />
                            <label className={styles.datetitle}>Date:</label>
                            <label className={styles.datevalue}>{new Date(country.lastUpdate).toDateString()}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>



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

    onChange = event => {
        this.setState({ search: event.target.value });
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
                            <a href="/">
                                <h5>Covid19</h5>
                            </a>
                        </div>
                        <div className={styles.searchbar}>
                            <img src={Search} className={styles.searchicon} />
                            <input className={styles.search} placeholder="Search" onChange={this.onChange} />
                        </div>
                        <div className={styles.totalcard}>
                            <label>{this.state.countryDetails.length} Regions</label>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className="container">
                            <div className="row">
                                {
                                    this.state.countryDetails.map(country => {
                                        return this.renderCountry(country)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Countries