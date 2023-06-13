/*
 * File: project.component.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:05 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 9:48:11 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { ProjectItemContainer, BackgroundImage, ContentContainer, ButtonContainer } from './project-item.styles.jsx';
import { BUTTON_TYPES } from '../button/buttonTypes.js';
import GithubIcon from '../../data/components/button/githubIcon.jsx'
import DemoIcon from '../../data/components/button/demoIcon.jsx';

import CustomButton from '../button/button.component.jsx';

const ProjectItem = ({ title, description, image, clicked }) => {
    return (
        <ProjectItemContainer clicked={clicked}>
            <BackgroundImage imageurl={image} />
            <ContentContainer>
                <h2>{title}</h2>
                <p>{description}</p>

                <ButtonContainer clicked={clicked}>
                    <CustomButton type={BUTTON_TYPES.DEMO} disabled={!clicked}>
                        <DemoIcon />
                    </CustomButton>
                    <CustomButton type={BUTTON_TYPES.GITHUB} disabled={!clicked}>
                        <GithubIcon />
                    </CustomButton>
                </ButtonContainer>

            </ContentContainer>
        </ProjectItemContainer>
    );
}

export default ProjectItem;