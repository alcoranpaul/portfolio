/*
 * File: projectPreview.component.jsx
 * Project: portfolio
 * File Created: Friday, 9th June 2023 4:15:21 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Sunday, 2nd July 2023 12:32:55 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Renders the Project Items
 */

import { useState, useEffect } from 'react';
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


const COLUMN_WIDTHS = [4, 4, 4]; // Initial column widths

//TODO: State machine for Arrow hover?
// - Add view all button
const ProjectPreview = ({ projects }) => {
    const [columnWidths, setColumnWidths] = useState(COLUMN_WIDTHS); // Initial column widths
    const [activeIndex, setActiveIndex] = useState(-1); // Active index of the clicked project
    const [maxIndex, setMaxIndex] = useState(0); // Max index for traversal    
    const [isAnimating, setIsAnimating] = useState(false);

    const projectsKeys = Object.keys(projects);
    const projectsValues = Object.values(projects);
    const lastIndexOfProject = projectsValues - 1;

    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 500); // Set the desired duration of the transition effect in milliseconds
        return () => clearTimeout(timeout);
    }, [maxIndex]);

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

    const handleNext = () => {
        setActiveIndex(-1);
        setColumnWidths(COLUMN_WIDTHS);
        setMaxIndex((prevIndex) => (prevIndex + 1) % Object.keys(projects).length)

    }

    const handlePrev = () => {
        setActiveIndex(-1);
        setColumnWidths(COLUMN_WIDTHS);
        setMaxIndex((prevIndex) =>
            prevIndex === 0 ? Object.keys(projects).length - 1 : prevIndex - 1
        );

    };



    return (
        <ProjectPreviewWrapper>
            <ProjectsPreviewContainer>
                {projectsValues
                    .slice(maxIndex, maxIndex + 3)
                    .map((project, index) => (
                        <ProjectContainer
                            key={projectsKeys[index]}
                            onClick={() => handleClick(index)}
                            lg={columnWidths[index]}
                            className={isAnimating ? 'fade-in' : ''}
                        >
                            <ProjectItem
                                title={project.title}
                                description={project.description}
                                image={project.imgURL}
                                clicked={index === activeIndex}
                                github={project.github}
                                demo={project.demo}
                            />
                        </ProjectContainer>
                    ))}
            </ProjectsPreviewContainer>

            {maxIndex !== 0 && (
                <LeftArrowContainer>
                    <Arrow onClick={handlePrev}>
                        <ArrowIcon />
                    </Arrow>
                </LeftArrowContainer>
            )}

            {(maxIndex + 3) === lastIndexOfProject && (
                <RightArrowContainer>
                    <Arrow onClick={handleNext}>
                        <ArrowIcon />
                    </Arrow>
                </RightArrowContainer>
            )}
        </ProjectPreviewWrapper>
    );

}


export default ProjectPreview;