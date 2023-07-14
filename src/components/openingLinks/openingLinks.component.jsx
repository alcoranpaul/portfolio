/*
 * File: openingLinks.component.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 1:53:08 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 10:57:53 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */



import { CardGroup, Card } from 'react-bootstrap';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Observer from '../../utils/observers/observer';
import SectionHoverSFX from '../sectionHoverSFX/sectionHoverSFX.component';
import { OpeningLinksContainer, CardNavLink, CardIndividual } from './openingLinks.styles'

const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    none: { opacity: 0, y: 0 }
};


export const onHomeLinksClick = new Observer();
export const onHomeLinksHover = new Observer();


const OpeningLinks = ({ showCards }) => {
    const [buttonIndex, setButtonIndex] = useState(null); // Keep track of the index of the hovered button
    const [disabled, setDisabled] = useState([false, false, false, false]);


    const handleOnHover = (index) => {
        setButtonIndex(index)
        const updatedDisabled = Array(4).fill(true);
        updatedDisabled[index] = false;
        setDisabled(updatedDisabled);
    };

    const handleOnMouseLeave = () => {
        setButtonIndex(null)
        setTimeout(() => {
            setDisabled([false, false, false, false]);
        }, 400);

    };



    return (
        <OpeningLinksContainer>
            {showCards && (

                <>
                    <CardGroup>

                        {['Projects', 'Skills', 'Contact', 'About'].map((title, index) => (
                            <CardIndividual
                                key={index}
                                variants={cardVariants}
                                initial={showCards ? "hidden" : "none"}
                                animate={showCards ? "visible" : "none"}
                                exit={showCards ? "hidden" : "none"}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                disabled={disabled[index]}
                            >
                                <CardNavLink to={title.toLowerCase()} $index={index}
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

                            </CardIndividual>
                        ))
                        }
                    </CardGroup>
                    <div>
                        {<SectionHoverSFX buttonIndex={buttonIndex} />}
                    </div>
                </>
            )
            }

        </OpeningLinksContainer>
    )

}

export default OpeningLinks;