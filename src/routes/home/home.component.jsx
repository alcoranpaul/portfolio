/*
 * File: home.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:24:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 22nd June 2023 12:18:25 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardGroup, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TypingAnimation, { typingObserver } from '../../components/typingAnimation/typingAnimation.component.jsx';
import Observer from '../../utils/observers/observer.js';

import { MainContent } from './home.styles.jsx';

const shortDescription = "Passionate <b>software<\/b> developer driven\n\nby a desire to create <b>meaningful<\/b> applications, collaborate, and make a positive impact through continuous learning and values-driven actions.";


class OnLinkClick extends Observer {
    constructor() {
        super();
    }
}
export const onHomeLinksClick = new OnLinkClick();

const soemthing = {
    moveUp: { y: -100 },
    default: { y: 0 }
};

const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    none: { opacity: 0, y: 0 }
};

const Home = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [showCards, setCards] = useState(false);


    useEffect(() => {
        const handleTypingComplete = () => {
            console.log("Typing animation complete!");
            setTimeout(() => {
                setShowLinks(true);
                setTimeout(() => {
                    setCards(true);
                }, 2000);
            }, 2000);
        };

        typingObserver.subscribe(handleTypingComplete);

        return () => {
            typingObserver.unsubscribe(handleTypingComplete);
        };
    }, []);


    const handleOnButtonClick = () => {
        onHomeLinksClick.notify();
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                overflow: 'hidden',
                width: '100%'
            }}
        >
            <MainContent>

                <motion.div
                    variants={soemthing}
                    initial={showLinks ? "moveUp" : "default"}
                    animate={showLinks ? "moveUp" : "default"}
                    transition={{ duration: 2 }}
                >
                    <motion.h2
                        className='name-container'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    > Hi I'm <span className='name'>Paul</span></motion.h2>

                    <TypingAnimation value={shortDescription} className="short-description" />
                </motion.div>
                <div className='card-container'>
                    {showCards && (
                        <CardGroup>
                            {['Projects', 'Skills', 'Contact', 'About'].map((title, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    initial={showCards ? "hidden" : "none"}
                                    animate={showCards ? "visible" : "none"}
                                    exit={showCards ? "hidden" : "none"}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link to={title.toLowerCase()} className='card-NavLink' onClick={handleOnButtonClick}>
                                        <motion.div
                                            key={`button-${index}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}

                                        >
                                            <Card className='card'>
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>{title}</Card.Title>
                                                    <Card.Text className='card-text'>{`Explore ${title.toLowerCase()}`}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </Link>

                                </motion.div>
                            ))}
                        </CardGroup>
                    )

                    }
                </div>



            </MainContent >
        </motion.div >
    );
};

export default Home;
