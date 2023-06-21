/*
 * File: home.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:24:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 20th June 2023 9:42:36 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */


import { Row, Col } from 'react-bootstrap';
import tempProjectShowcase from '../../data/home/tempProjectShowcase.gif';

import { MainContent, TopRow, NameContainer, FactsContainer, BotRow, ProjectsContainer } from './home.styles.jsx';

import TypingAnimation from '../../components/typingAnimation/typingAnimation.component.jsx';
import VerticalSlideText from '../../components/verticalSlideText/verticalSlideText.component';

const shortDescription = "Passionate software developer driven by a desire to create meaningful applications, collaborate, and make a positive impact through continuous learning and values-driven actions.";

const carousel = ['Web Developer', 'Software Engineer', 'Programmer']
const Home = () => {
    return (
        <MainContent>
            <TopRow>
                <NameContainer>
                    <Row>
                        <Col lg={5}>
                            <h2 className='name-container'>Hi I'm <span className='name'>Paul</span></h2>
                        </Col>
                        <Col className='carousel'>

                            <VerticalSlideText words={carousel} interval={2000} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TypingAnimation value={shortDescription} className='short-description' />
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
        </MainContent>
    );
};

export default Home;
