/*
 * File: projects.components.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 6:27:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 9:46:33 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';

import { fetchProjectsStart } from "../../store/projects/projects.action";
import { selectProjects } from "../../store/projects/projects.selector";
import ProjectPreview from "../../components/projectPreview/projectPreview.component";
import ProjectPage from "../../components/projectPage/projectPage.component";


const Projects = ({ location }) => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const shouldFetchProjects = location.pathname === '/projects';

    useEffect(() => {
        if (shouldFetchProjects) {
            dispatch(fetchProjectsStart());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Routes>
            <Route index element={<ProjectPreview projects={projects} />} key="projectPreview" />
            <Route path=":projectId" element={<ProjectPage projects={projects} />} key="projectPage" />
        </Routes>

    );
};

export default Projects;