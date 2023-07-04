/*
 * File: workContent.component.jsx
 * Project: portfolio
 * File Created: Sunday, 2nd July 2023 10:40:15 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 1:54:44 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Card, Row, Col, Container } from 'react-bootstrap';
import WorkItem from '../workItem/workItem.component';

const WorkContent = ({ works }) => {
    const worksKeys = Object.keys(works);
    const worksValues = Object.values(works);

    return (
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
    );
}

export default WorkContent;
