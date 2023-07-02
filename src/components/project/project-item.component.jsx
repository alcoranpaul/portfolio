/*
 * File: project.component.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:05 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 10:41:56 pm
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

const ProjectItem = ({ title, description, image, clicked, github, demo }) => {
    const testDescription = description + " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquam, nunc nisl aliquet nunc, quis aliquam nisl"
    const shortenedDescription = testDescription.split(' ').slice(0, 5).join('. ') + '...';
    return (
        <ProjectItemContainer clicked={clicked}>
            <BackgroundImage imageurl={image} />
            <ContentContainer>
                <div className='text-descriptions'>
                    <h2 className='project-title'>{title}</h2>
                    <span className='project-description'>{shortenedDescription}</span>
                </div>

                <ButtonContainer clicked={clicked}>
                    <CustomButton type={BUTTON_TYPES.DEMO} disabled={!clicked} linkTo={demo}>
                        <DemoIcon />
                    </CustomButton>
                    <CustomButton type={BUTTON_TYPES.GITHUB} disabled={!clicked} linkTo={github}>
                        <GithubIcon />
                    </CustomButton>
                </ButtonContainer>

            </ContentContainer>
        </ProjectItemContainer>
    );
}

export default ProjectItem;