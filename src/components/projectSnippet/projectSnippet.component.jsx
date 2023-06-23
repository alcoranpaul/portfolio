/*
 * File: projectSnippet.component.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 10:36:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 23rd June 2023 1:20:48 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import React, { useState } from 'react';
import { Container, WordCloud } from './projectSnippet.styles';

const ProjectSnippet = ({ show }) => {
    // const [showWordCloud, setShowWordCloud] = useState(true);

    // const handleToggleWordCloud = () => {
    //     setShowWordCloud(!showWordCloud);
    // };

    return (
        <Container >
            <WordCloud show={show}>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
            </WordCloud>
        </Container>
    );
};

export default ProjectSnippet;
