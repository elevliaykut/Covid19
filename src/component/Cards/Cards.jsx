import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Cards.module.css';
import Icon from '../../icons/running.svg';

const Cards = () => {
    return (
        <div>
            <Grid container item xs="12" md="12" className={styles.content}>
                <Grid item xs="3" md="3">
                    <Card className={styles.confirmedcart}>
                        <CardContent>
                            <Grid container item xs="12" md="12" className={styles.cardheader}>
                                <Grid item xs="2" md="2">
                                    <img src={Icon} className={styles.confirmedicon} />
                                </Grid>
                                <Grid item xs="5" md="5" className={styles.title}>
                                    <h3>Total Confirmed</h3>
                                </Grid>
                            </Grid>
                            <Grid container item xs="12" md="12" className={styles.cardbody}>
                                <Grid item xs="12" md="12">
                                    rakam
                                </Grid>
                                <Grid item xs="12" md="12"> 
                                    People
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs="3" md="3">
                    <Card className={styles.recovered}>
                        <CardContent>
                            <Grid container item xs="12" md="12" className={styles.cardheader}>
                                <Grid item xs="2" md="2">
                                    <img src={Icon} className={styles.recoveredicon} />
                                </Grid>
                                <Grid item xs="6" md="6" className={styles.title}>
                                    <h3>Total Recovered</h3>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs="3" md="3">
                    <Card className={styles.death}>
                        <CardContent>
                        <Grid container item xs="12" md="12" className={styles.cardheader}>
                                <Grid item xs="2" md="2">
                                    <img src={Icon} className={styles.deathicon} />
                                </Grid>
                                <Grid item xs="4" md="4" className={styles.title}>
                                    <h3>Total Death</h3>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;
