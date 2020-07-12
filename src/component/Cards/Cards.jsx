import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import styles from './Cards.module.css';
import Icon from '../../icons/running.svg';
import CountUp from 'react-countup';
import Time from '../../icons/clock.svg';
import People from '../../icons/group.svg';
import { Row, Col } from 'reactstrap';
import { totalValues } from '../../api/TotalValues';
import Snipper from '../../icons/snipper.svg';


class Cards extends Component {

    constructor() {
        super();
        this.state = {
            confirmed: '',
            recovered: '',
            deaths: '',
            lastUpdate: '',
            loadded: false
        }
    }

    renderLoading = () => {
        return (
            <div className={styles.loadingpage}>
                <div className={styles.header}></div>
                <img src={Snipper} className={styles.loadingicon} />
                <h2>the server awakens...</h2>
            </div>
        )
    }

    componentDidMount() {
        totalValues().then(res => {
            this.setState({
                confirmed: res.confirmed.value,
                recovered: res.recovered.value,
                deaths: res.deaths.value,
                lastUpdate: res.lastUpdate,
                loadded: true
            })
        });

    }

    render() {
        if (!this.state.loadded) {
            return this.renderLoading()
        }
        return (
            <Grid item xs={12} md={12} className={styles.content}>
                <Row>
                    <Col>
                        <Card className={styles.confirmedcart}>
                            <CardContent>
                                <a href="/countries">
                                    <Grid container item xs="12" md="12" className={styles.cardheader}>
                                        <Grid item xs="2" md="2">
                                            <div className={styles.confirmedicon}></div>
                                        </Grid>
                                        <Grid item xs="10" md="10" className={styles.title}>
                                            <h3>Confirmed</h3>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs="12" md="12" className={styles.cardbody}>
                                        <Grid item xs="2" md="2">
                                            <img src={People} className={styles.peopleicon} />
                                        </Grid>
                                        <Grid item xs="10" md="10" className={styles.value}>
                                            <CountUp start={0} end={this.state.confirmed} duration={2.5} separator="," />
                                        </Grid>
                                    </Grid>
                                    <Grid container className={styles.cardfooter}>
                                        <Grid item xs="2" md="2">
                                            <img src={Time} className={styles.timeicon} />
                                        </Grid>
                                        <Grid item="7" md="7" className={styles.date}>
                                            <h6>{new Date(this.state.lastUpdate).toDateString()}</h6>
                                        </Grid>
                                    </Grid>
                                </a>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={styles.recovered}>
                            <CardContent>
                                <a href="/countries">
                                    <Grid container item xs="12" md="12" className={styles.cardheader}>
                                        <Grid item xs="2" md="2">
                                            <div className={styles.recoveredicon}></div>
                                        </Grid>
                                        <Grid item xs="10" md="10" className={styles.title}>
                                            <h3>Total Recovered</h3>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs="12" md="12" className={styles.cardbody}>
                                        <Grid item xs="2" md="2">
                                            <img src={People} className={styles.peopleicon} />
                                        </Grid>
                                        <Grid item xs="10" md="10" className={styles.value}>
                                            <CountUp start={0} end={this.state.recovered} duration={2.5} separator="," />
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs="12" md="12" className={styles.cardfooter}>
                                        <Grid item xs="2" md="2">
                                            <img src={Time} className={styles.timeicon} />
                                        </Grid>
                                        <Grid item="7" md="7" className={styles.date}>
                                            <h6>{new Date(this.state.lastUpdate).toDateString()}</h6>
                                        </Grid>
                                    </Grid>
                                </a>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={styles.death}>
                            <CardContent>
                                <a href="/countries">
                                    <Grid container item xs="12" md="12" className={styles.cardheader}>
                                        <Grid item xs="2" md="2">
                                            <div className={styles.deathicon}></div>
                                        </Grid>
                                        <Grid item xs="10" md="10" className={styles.title}>
                                            <h3>Total Death</h3>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs="12" md="12" className={styles.cardbody}>
                                        <Grid item xs="2" md="2">
                                            <img src={People} className={styles.peopleicon} />
                                        </Grid>
                                        <Grid item xs="10" md="10" className={styles.value}>
                                            <CountUp start={0} end={this.state.deaths} duration={2.5} separator="," />
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs="12" md="12" className={styles.cardfooter}>
                                        <Grid item xs="2" md="2">
                                            <img src={Time} className={styles.timeicon} />
                                        </Grid>
                                        <Grid item="7" md="7" className={styles.date}>
                                            <h6>{new Date(this.state.lastUpdate).toDateString()}</h6>
                                        </Grid>
                                    </Grid>
                                </a>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Cards;
