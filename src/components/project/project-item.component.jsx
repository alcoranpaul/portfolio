/*
 * File: project.component.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:05 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 8:43:13 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { ProjectItemContainer, BackgroundImage, ContentContainer, ButtonContainer } from './project-item.styles.jsx';
import Button from '../button/button.component.jsx';

const ProjectItem = ({ title, description, image, clicked }) => {
    return (
        <ProjectItemContainer clicked={clicked}>
            <BackgroundImage imageurl={image} />
            <ContentContainer>
                <h2>{title}</h2>
                <p>{description}</p>

                <ButtonContainer clicked={clicked}>
                    <Button />
                    <Button />
                </ButtonContainer>

            </ContentContainer>
        </ProjectItemContainer>
    );
}

export default ProjectItem;