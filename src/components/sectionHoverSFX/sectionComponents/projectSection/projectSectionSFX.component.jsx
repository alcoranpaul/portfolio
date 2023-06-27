/*
 * File: projectSectionSFX.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 1:04:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 27th June 2023 1:17:25 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { WordCloud, Container } from './projectSectionSFX.styles';
const ProjectSectionSFX = ({ show }) => {
    return (
        <Container>
            <WordCloud show={show}>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
                <span>PROJECTS</span>
            </WordCloud>
        </Container>
    )
}

export default ProjectSectionSFX;