/*
 * File: projectPreview.component.jsx
 * Project: portfolio
 * File Created: Friday, 9th June 2023 4:15:21 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 8:28:59 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Renders the Project Items
 */

import { useState } from 'react';
import ArrowIcon from '../../data/home/icons/arrowIcon';
import ProjectItem from '../project/project-item.component';

import {
    ProjectPreviewWrapper,
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
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum voluptates. ',
        image: 'https://th.bing.com/th/id/OIP.ZO4TmUbxM5-V1R7bbDpMHQHaEK?pid=ImgDet&rs=1'
    },
    projectThree: {
        title: 'Project Three',
        description: 'This is a project',
        image: 'https://th.bing.com/th/id/OIP.W2ZZmFD47OaU47rNNwzzUAHaEo?pid=ImgDet&rs=1'
    },
}

const COLUMN_WIDTHS = [4, 4, 4]; // Initial column widths

//TODO: State machine for Arrow hover?
// - When hot hovered the description should be lessen
// - When hovered the description should be expanded
// - Add view all button
const ProjectPreview = () => {
    const [columnWidths, setColumnWidths] = useState(COLUMN_WIDTHS); // Initial column widths
    const [activeIndex, setActiveIndex] = useState(-1); // Active index of the clicked project

    const handleClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(-1);
            setColumnWidths(COLUMN_WIDTHS);
        }
        else {
            setActiveIndex(index);
            const updatedWidths = [1, 1, 1]; // Reset all column widths to 1
            updatedWidths[index] = 10; // Set the clicked column width to 10
            setColumnWidths(updatedWidths);
        }
    };

    return (
        <ProjectPreviewWrapper>
            <ProjectsPreviewContainer>
                {Object.keys(projectsTemp).map((key, index) => (
                    <ProjectContainer key={key} onClick={() => handleClick(index)}
                        lg={columnWidths[index]}
                    >
                        <ProjectItem
                            title={projectsTemp[key].title}
                            description={projectsTemp[key].description}
                            image={projectsTemp[key].image}
                            clicked={index === activeIndex}
                        />
                    </ProjectContainer>
                ))}
            </ProjectsPreviewContainer>

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

        </ProjectPreviewWrapper>
    );
}


export default ProjectPreview;