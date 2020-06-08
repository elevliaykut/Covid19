import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import styles from './Cards.module.css';
import Icon from '../../icons/running.svg';
import CountUp from 'react-countup';
import Time from '../../icons/clock.svg';
import { Row, Col } from 'reactstrap';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "loading";
    }
    return (
        <Grid item xs={12} md={12} className={styles.content}>
            <Row>
                <Col>
                    <Card className={styles.confirmedcart}>
                        <CardContent>
                            <Grid container item xs="12" md="12" className={styles.cardheader}>
                                <Grid item xs="2" md="2">
                                    <img src={Icon} className={styles.confirmedicon} />
                                </Grid>
                                <Grid item xs="10" md="10" className={styles.title}>
                                    <h3>Total Confirmed</h3>
                                </Grid>
                            </Grid>
                            <Grid container item xs="12" md="12" className={styles.cardbody}>
                                <Grid item xs="12" md="12" className={styles.value}>
                                    <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                                </Grid>
                                <Grid item xs="12" md="12" className={styles.label}>
                                    People
                                </Grid>
                            </Grid>
                            <Grid container className={styles.cardfooter}>
                                <Grid item xs="2" md="2">
                                    <img src={Time} className={styles.timeicon} />
                                </Grid>
                                <Grid item="7" md="7" className={styles.date}>
                                    <h6>{new Date(lastUpdate).toDateString()}</h6>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.recovered}>
                        <CardContent>
                            <Grid container item xs="12" md="12" className={styles.cardheader}>
                                <Grid item xs="2" md="2">
                                    <img src={Icon} className={styles.recoveredicon} />
                                </Grid>
                                <Grid item xs="10" md="10" className={styles.title}>
                                    <h3>Total Recovered</h3>
                                </Grid>
                            </Grid>
                            <Grid container item xs="12" md="12" className={styles.cardbody}>
                                <Grid item xs="12" md="12" className={styles.value}>
                                    <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                                </Grid>
                                <Grid item xs="12" md="12" className={styles.label}>
                                    People
                                </Grid>
                            </Grid>
                            <Grid container item xs="12" md="12" className={styles.cardfooter}>
                                <Grid item xs="2" md="2">
                                    <img src={Time} className={styles.timeicon} />
                                </Grid>
                                <Grid item="7" md="7" className={styles.date}>
                                    <h6>{new Date(lastUpdate).toDateString()}</h6>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.death}>
                        <CardContent>
                            <Grid container item xs="12" md="12" className={styles.cardheader}>
                                <Grid item xs="2" md="2">
                                    <img src={Icon} className={styles.deathicon} />
                                </Grid>
                                <Grid item xs="10" md="10" className={styles.title}>
                                    <h3>Total Death</h3>
                                </Grid>
                            </Grid>
                            <Grid container item xs="12" md="12" className={styles.cardbody}>
                                <Grid item xs="12" md="12" className={styles.value}>
                                    <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                                </Grid>
                                <Grid item xs="12" md="12" className={styles.label}>
                                    People
                                </Grid>
                            </Grid>
                            <Grid container item xs="12" md="12" className={styles.cardfooter}>
                                <Grid item xs="2" md="2">
                                    <img src={Time} className={styles.timeicon} />
                                </Grid>
                                <Grid item="7" md="7" className={styles.date}>
                                    <h6>{new Date(lastUpdate).toDateString()}</h6>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Grid>
    );
}

export default Cards;
