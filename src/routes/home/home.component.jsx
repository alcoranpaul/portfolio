/*
 * File: home.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:24:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 21st June 2023 11:29:17 am
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
import { motion } from 'framer-motion';

const shortDescription = "Passionate software developer driven by a desire to create meaningful applications, collaborate, and make a positive impact through continuous learning and values-driven actions.";

const carousel = ['Web Developer', 'Software Engineer', 'Programmer']



const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                overflow: 'hidden',
                width: '100%'
            }}>
            <MainContent>
                <TopRow>
                    <NameContainer>
                        <Row>
                            <Col lg={5}>
                                <h2 className='name-container'>Hi I'm <span className='name'>Paul</span></h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TypingAnimation value={shortDescription} className='short-description' />
                            </Col>
                        </Row>
                    </NameContainer>
                </TopRow>
                <BotRow>
                    <ProjectsContainer>
                        <img src={tempProjectShowcase} alt='tempProjectShowcase' className='video' />
                    </ProjectsContainer>
                </BotRow>
            </MainContent>
        </motion.div>
    );
};

export default Home;
