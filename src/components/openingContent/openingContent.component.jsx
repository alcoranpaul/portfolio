/*
 * File: openingContent.component.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 2:00:46 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Sunday, 2nd July 2023 10:05:47 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { motion } from "framer-motion";
import { OpeningContainer, ShortDescription } from './openingContent.styles'

const linkVariants = {
    moveUp: { y: -225 },
    default: { y: 0 }
};

// eslint-disable-next-line react-hooks/exhaustive-deps
const shortDescription = "Passionate <b>software<\/b> developer driven\n\nby a desire to create <b>meaningful<\/b> applications, collaborate, and make a positive impact through continuous learning and values-driven actions.";


const OpeningContent = ({ showLinks }) => {
    return (
        <motion.div
            variants={linkVariants}
            initial="default"
            animate={showLinks ? "moveUp" : ""}
            transition={{ duration: 2 }}

        >
            <OpeningContainer

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            > Hi I'm <span className='name'>Paul</span></OpeningContainer>

            <ShortDescription value={shortDescription} />
        </motion.div >
    )
}

export default OpeningContent