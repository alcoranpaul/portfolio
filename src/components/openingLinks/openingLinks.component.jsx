/*
 * File: openingLinks.component.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 1:53:08 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 23rd June 2023 5:25:24 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */



import { CardGroup, Card } from 'react-bootstrap';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Observer from '../../utils/observers/observer';

import { OpeningLinksContainer, CardNavLink, BackgroundImage } from './openingLinks.styles'

const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    none: { opacity: 0, y: 0 }
};


export const onHomeLinksClick = new Observer();
export const onHomeLinksHover = new Observer();


const OpeningLinks = ({ showCards }) => {
    const [isHovered, setIsHovered] = useState(false);

    const [disabled, setDisabled] = useState([false, false, false, false]);



    const handleOnButtonClick = () => {
        onHomeLinksClick.notify();
    };

    const handleOnHover = (index) => {
        setIsHovered(true);
        const updatedDisabled = Array(4).fill(true);
        updatedDisabled[index] = false;
        setDisabled(updatedDisabled);
        const someBool = true
        onHomeLinksHover.notify(someBool);
    };

    const handleOnMouseLeave = () => {
        setIsHovered(false);
        setTimeout(() => {
            setDisabled([false, false, false, false]);

        }, 400);
        const someBool = false
        onHomeLinksHover.notify(someBool);
    };


    return (
        <OpeningLinksContainer>
            {showCards && (
                <CardGroup>
                    <BackgroundImage isVisible={isHovered} />
                    {['Projects', 'Skills', 'Contact', 'About'].map((title, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial={showCards ? "hidden" : "none"}
                            animate={showCards ? "visible" : "none"}
                            exit={showCards ? "hidden" : "none"}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                width: '300px', margin: "0px 30px 0px 30px", display: 'flex', justifyContent: 'center', alignItems: 'center',

                                pointerEvents: disabled[index] ? 'none' : 'auto', // Disable pointer events based on disabled state
                            }}
                        >
                            <CardNavLink to={title.toLowerCase()} onClick={handleOnButtonClick} $index={index}
                                onMouseEnter={() => handleOnHover(index)}
                                onMouseLeave={handleOnMouseLeave}
                            >
                                <motion.div
                                    key={`button-${index}`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    style={{

                                        opacity: disabled[index] ? 0.5 : 1, // Set opacity based on disabled state
                                        transition: 'opacity 0.3s ease-in-out', // Add a transition to opacity
                                    }}
                                >
                                    <Card className='card'>

                                        <Card.Body>
                                            <Card.Title className='card-title'>{title}</Card.Title>
                                            <Card.Text className='card-text'>{`Explore ${title.toLowerCase()}`}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </CardNavLink>

                        </motion.div>
                    ))
                    }

                </CardGroup >)
            }

        </OpeningLinksContainer >
    )

}

export default OpeningLinks;