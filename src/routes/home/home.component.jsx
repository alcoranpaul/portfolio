/*
 * File: home.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:24:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 10:19:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { typingObserver } from '../../components/typingAnimation/typingAnimation.component.jsx';
import OpeningLinks from '../../components/openingLinks/openingLinks.component.jsx';
import OpeningContent from '../../components/openingContent/openingContent.component.jsx';
import { MainContent, AdminSignIn } from './home.styles.jsx';


const Home = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [showCards, setCards] = useState(false);

    useEffect(() => {
        const handleTypingComplete = () => {
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
                <OpeningContent showLinks={showLinks} />
                <OpeningLinks showCards={showCards} />
            </MainContent>

        </motion.div>
    );
};

export default Home;
