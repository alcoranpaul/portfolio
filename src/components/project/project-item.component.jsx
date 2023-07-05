/*
 * File: project.component.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:05 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 6:15:02 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import { Link } from 'react-router-dom';

import GithubIcon from '../../data/components/button/githubIcon.jsx'
import DemoIcon from '../../data/components/button/demoIcon.jsx';
import CaseStudyIcon from '../../data/components/button/caseStudyIcon.jsx';

import CustomButton from '../button/button.component.jsx';
import { BUTTON_TYPES } from '../button/buttonTypes.js';


import { ProjectItemContainer, BackgroundImage, ContentContainer, ButtonContainer } from './project-item.styles.jsx';

const ProjectItem = ({ title, description, image, clicked, github, demo, blurHash }) => {
    const testDescription = description + " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquam, nunc nisl aliquet nunc, quis aliquam nisl"
    const shortenedDescription = testDescription.split(' ').slice(0, 5).join('. ') + '...';

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = image;
    }, [image]);



    return (
        <ProjectItemContainer clicked={clicked}>
            {!imageLoaded && (
                <Blurhash
                    hash={blurHash}
                    width={1280}
                    height={720}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />)}
            {imageLoaded && (
                <>
                    <BackgroundImage imageurl={image} loading='lazy' />
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
                            <Link to={title}>
                                <CustomButton type={BUTTON_TYPES.CASE_STUDY} disabled={!clicked} disableLink={true}>
                                    <CaseStudyIcon />
                                </CustomButton>
                            </Link>
                        </ButtonContainer>

                    </ContentContainer>
                </>)}

        </ProjectItemContainer>
    );
}

export default ProjectItem;