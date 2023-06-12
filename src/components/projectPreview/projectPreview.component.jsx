/*
 * File: projectPreview.component.jsx
 * Project: portfolio
 * File Created: Friday, 9th June 2023 4:15:21 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 1:02:09 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Renders the Project Items
 */

// import { Col } from 'react-bootstrap';
import ArrowIcon from '../../data/home/icons/arrowIcon';
import ProjectItem from '../project/project-item.component';

import {
    ProjectPreviewContainer,
    LeftArrowContainer,
    RightArrowContainer,
    Arrow,
    ProjectsPreviewContainer,
    ProjectContainer
} from './projectPreview.styles.jsx';

const projectsTemp = {
    projectOne: {
        title: 'Project One',
        description: 'This is a project',
        image: 'https://th.bing.com/th/id/OIP.py11cEQbNyv0SjZwjkHasAHaEK?pid=ImgDet&rs=1'
    },
    projectTwo: {
        title: 'Project Two',
        description: 'This is a project',
        image: 'https://th.bing.com/th/id/OIP.ZO4TmUbxM5-V1R7bbDpMHQHaEK?pid=ImgDet&rs=1'
    },
    projectThree: {
        title: 'Project Three',
        description: 'This is a project',
        image: 'https://th.bing.com/th/id/OIP.W2ZZmFD47OaU47rNNwzzUAHaEo?pid=ImgDet&rs=1'
    },
}

//TODO: State machine for Arrow hover?
const ProjectPreview = () => {
    return (
        <ProjectPreviewContainer>
            <LeftArrowContainer>
                <Arrow>
                    <ArrowIcon />
                </Arrow>
            </LeftArrowContainer>

            <RightArrowContainer>
                <Arrow>
                    <ArrowIcon />
                </Arrow>
            </RightArrowContainer>

            <ProjectsPreviewContainer>
                {Object.keys(projectsTemp).map((key) => (
                    <ProjectContainer key={key}>
                        <ProjectItem title={projectsTemp[key].title}
                            description={projectsTemp[key].description}
                            image={projectsTemp[key].image}
                        />
                    </ProjectContainer>
                ))}
            </ProjectsPreviewContainer>
        </ProjectPreviewContainer>
    );
}


export default ProjectPreview;