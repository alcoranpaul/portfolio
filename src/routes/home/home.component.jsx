/*
 * File: home.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:24:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 5:14:00 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { Row, Col } from 'react-bootstrap';
import tempProjectShowcase from '../../data/home/tempProjectShowcase.gif';

import { MainContent, TopRow, NameContainer, FactsContainer, BotRow, ProjectsContainer } from './home.styles.jsx';

const Home = () => {
    return (
        <MainContent>
            <TopRow>
                <NameContainer>
                    <Row>
                        <Col className='name'>
                            <h2>Hi I'm <span>Paul</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='carousel'>
                            <ul>
                                <li>Web Developer</li>
                                <li>Software Engineer</li>
                                <li>Programmer</li>

                            </ul>
                        </Col>
                    </Row>
                </NameContainer>
                <FactsContainer>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>OOP</li>
                    </ul>
                </FactsContainer>
            </TopRow>
            <BotRow>
                <ProjectsContainer>
                    <img src={tempProjectShowcase} alt='tempProjectShowcase' className='video' />
                </ProjectsContainer>
            </BotRow>
        </MainContent >
    );
};

export default Home;
