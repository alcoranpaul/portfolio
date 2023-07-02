/*
 * File: projects.components.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 6:27:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 9:24:13 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { fetchProjectsStart } from "../../store/projects/projects.action";
import { selectProjects } from "../../store/projects/projects.selector";
import ProjectPreview from "../../components/projectPreview/projectPreview.component";

const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);

    useEffect(() => { //TODO: simplify this

        if (Object.keys(projects).length > 0) {
            console.log(`Projects/getProjects: projects already exists`)
        }
        else {
            dispatch(fetchProjectsStart())
        }

    }, [])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                overflow: 'hidden',
                width: '100%'
            }}>
            <ProjectPreview />
        </motion.div>
    );
};

export default Projects;