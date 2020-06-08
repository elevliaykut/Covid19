import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Content.module.css';
import Map from '../../icons/map.svg';
import { Row, Col } from 'reactstrap';

const Content = () => {
    return (
        <Grid item xs={12} md={12} className={styles.content}>
            <Row>
                <Col>
                    <img src={Map} className={styles.map} />
                </Col>
                <Col>
                    <h2>📍Stay At Home</h2>
                    <Typography color="textSecondary" className={styles.paragraph}>
                        Today is equal to day and night in the northern hemisphere.We say stay at
                        home for our health while we will meet the spring.For healthy days,
                        this Let's spend the days at home with our loved ones while maintaining the social distance.
                        I wish all the seasons and the days we will live in contact with nature are close.
                    </Typography>
                </Col>
            </Row>
        </Grid>
    );
}

export default Content;
