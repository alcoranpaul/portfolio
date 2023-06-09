/*
 * File: home.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:24:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 2:54:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { Container, Row, Col } from 'react-bootstrap';
import tempProjectShowcase from '../../data/home/tempProjectShowcase.gif';
import './home.styles.scss';

const Home = () => {
    return (
        <Container className='mainContent'>


            <Row className='topRow'>
                <Col className='name-container'>
                    <Row>
                        <Col className='name'>
                            <h2>Hi I'm <span>Paul</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='carousel'>
                            <ul>
                                <li>Full Stack Developer</li>
                                <li>Web Developer</li>
                                <li>Software Engineer</li>
                            </ul>
                        </Col>
                    </Row>

                </Col>
                <Col className='facts-container' >
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>OOP</li>
                    </ul>
                </Col>
            </Row>
            <Row className='botRow'>
                <Col className='projects-container' >
                    <img src={tempProjectShowcase} alt='tempProjectShowcase' className='video' />
                </Col>
            </Row>



        </Container >
    );
};

export default Home;
