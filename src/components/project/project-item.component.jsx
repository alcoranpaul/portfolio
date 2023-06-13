/*
 * File: project.component.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:05 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 2:57:30 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { ProjectItemContainer, BackgroundImage, ContentContainer } from './project-item.styles.jsx';
const ProjectItem = ({ title, description, image, expanded }) => {
    return (
        <ProjectItemContainer expanded={expanded}>
            <BackgroundImage imageurl={image} />
            <ContentContainer>
                <h2>{title}</h2>
                <p>{description}</p>
            </ContentContainer>
        </ProjectItemContainer>
    );
}

export default ProjectItem;