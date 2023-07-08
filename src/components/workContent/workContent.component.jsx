/*
 * File: workContent.component.jsx
 * Project: portfolio
 * File Created: Sunday, 2nd July 2023 10:40:15 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 6:16:03 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import WorkItem from '../workItem/workItem.component';

const WorkContent = ({ works }) => {
    const worksKeys = Object.keys(works);
    const worksValues = Object.values(works);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                padding: '20px 0px 20px 0px',

            }}>



            <Container className="developerWork" fluid style={{ width: '80%' }}>
                {worksValues.map((work, index) => (
                    <WorkItem
                        title={work.title}
                        imgURL={work.imgURL}
                        role={work.role}
                        description={work.description}
                        date={work.date}
                        blurHash={work.blurHash}
                        tech={work.tech}
                        key={worksKeys[index]}
                    />))}
            </Container>
        </motion.div>
    );
}

export default WorkContent;
