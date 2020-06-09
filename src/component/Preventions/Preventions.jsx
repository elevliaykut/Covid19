import React from 'react';
import styles from './Preventions.module.css';
import Grid from '@material-ui/core/Grid';
import Hand from '../../icons/hand.svg';
import Mask from '../../icons/mask.svg';
import Disinfect from '../../icons/disinfection.svg';
import { Row, Col } from 'reactstrap';

const Preventions = () => {
    return (
        <Grid item xs={12} md={12} className={styles.content}>
            <Row>
                <Col className={styles.preventions}>
                    <h2>Preventions</h2>
                </Col>
            </Row>
            <Row>
                <Col className={styles.washhands}>
                    <img src={Hand} className={styles.handicon} />
                    <h4>Wash Your Hands</h4>
                    <h5>Wash your hands regularly, especially: </h5>
                    <li>after blowing your nose, coughing or sneezing. </li>
                    <li>after touching surfaces outside of the home.</li>
                    <li>after touching money. </li>
                    <li>before, during and after caring for a sick or vulnerable person. </li>
                    <li>before and after eating. </li>
                </Col>
                <Col className={styles.usemask}>
                    <img src={Mask} className={styles.maskicon} />
                    <h4>Use Mask</h4>
                    <h5>Use mask regularly, especially: </h5>
                    <p>Since the start of the coronavirus outbreak some places have fully embraced wearing face mask, and anyone
                    caught without one risk becoming a social pariah.
                    </p>
                </Col>
                <Col className={styles.disinfect}>
                    <img src={Disinfect} className={styles.disinfecticon} />
                    <h4>Disinfect</h4>
                    <li>after someone with suspected coronavirus (COVID-19)</li>
                    <li>wear disposable or washing-up gloves and aprons for cleaning.</li>
                </Col>
            </Row>
        </Grid>
    );
}

export default Preventions;
