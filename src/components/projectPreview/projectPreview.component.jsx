/*
 * File: projectPreview.component.jsx
 * Project: portfolio
 * File Created: Friday, 9th June 2023 4:15:21 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 5:12:35 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Container, Row, Col } from 'react-bootstrap';
import Arrow from '../../data/home/icons/arrowIcon';
import './projectPreview.styles.scss';
const ProjectPreview = ({ project }) => {
    return (
        <Container className='main-content'>
            <div className='leftArrow'>
                <Arrow />
            </div>
            <Row className='projects-container'>
                <Col className='project-one'>1</Col>
                <Col className='project-two'>2</Col>
                <Col className='project-three'>3</Col>
            </Row>
        </Container>
    );
}


export default ProjectPreview;