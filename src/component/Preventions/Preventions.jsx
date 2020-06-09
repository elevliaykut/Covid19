import React from 'react';
import styles from './Preventions.module.css';
import Grid from '@material-ui/core/Grid';
import Hand from '../../icons/hand.svg';
import Mask from '../../icons/mask.svg';
import Disinfect from '../../icons/disinfection.svg';
import { Row, Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Preventions = () => {
    return (
        <Grid item xs={12} md={12} className={styles.content}>
            <Row>
                <Col className={styles.preventions}>
                    <h2>Preventions</h2>
                </Col>
            </Row>
            <Row className={styles.cards}>
                <Card className={styles.washhandscard}>
                    <CardContent>
                        <Row>
                            <Col>
                                <img src={Hand} className={styles.handicon} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className={styles.washhandscontent}>
                                <h4>Wash Your Hands</h4>
                                <h5>Wash your hands regularly, especially: </h5>
                                <li>after blowing your nose, coughing or sneezing. </li>
                                <li>after touching surfaces outside of the home.</li>
                                <li>after touching money. </li>
                                <li>before, during and after caring for a sick or vulnerable person. </li>
                                <li>before and after eating. </li>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
                <Card className={styles.usemaskcard}>
                    <CardContent>
                        <Row>
                            <Col>
                                <img src={Mask} className={styles.maskicon} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className={styles.washhandscontent}>
                                <h4>Wash Your Hands</h4>
                                <h5>Wash your hands regularly, especially: </h5>
                                <li>after blowing your nose, coughing or sneezing. </li>
                                <li>after touching surfaces outside of the home.</li>
                                <li>after touching money. </li>
                                <li>before, during and after caring for a sick or vulnerable person. </li>
                                <li>before and after eating. </li>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
                <Card className={styles.disinfectcard}>
                    <CardContent>
                        <Row>
                            <Col>
                                <img src={Disinfect} className={styles.disinfecticon} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className={styles.disinfectcontent}>
                                <h4>Disinfect</h4>
                                <li>after someone with suspected coronavirus (COVID-19)</li>
                                <li>wear disposable or washing-up gloves and aprons for cleaning.</li>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
            </Row>
        </Grid>
    );
}

export default Preventions;
