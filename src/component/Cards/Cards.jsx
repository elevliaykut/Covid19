import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Cards.module.css';

const Cards = () => {
    return (
        <div>
            <Grid container item xs="12" md="12" className={styles.content}>
                <Grid item xs="3" md="3">
                    <Card className={styles.confirmed}>
                        <CardContent>
                            <Typography gutterBottom variant="5" component="h2" className={styles.cardtitle}>
                                Confirmed
                            </Typography>
                        </CardContent>
                        <Typography className={styles.cardbody}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs="3" md="3">
                    <Card className={styles.recovered}>
                        <CardContent>
                            <Typography gutterBottom variant="5" component="h2" className={styles.cardtitle}>
                                Recovered
                            </Typography>
                        </CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs="3" md="3">
                    <Card className={styles.death}>
                        <CardContent>
                            <Typography gutterBottom variant="5" component="h2" className={styles.cardtitle}>
                                Deaths
                            </Typography>
                        </CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;
