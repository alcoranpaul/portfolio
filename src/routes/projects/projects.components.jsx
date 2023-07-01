/*
 * File: projects.components.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 6:27:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 7:45:45 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { selectProjects } from "../../store/projects/projects.selector";
import ProjectPreview from "../../components/projectPreview/projectPreview.component";

const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);

    useEffect(() => {

        if (projects) {
            console.log(`Projects/getProjects: projects already exists`)
            return;
        }

        dispatch(onFetchProjects())

        // try {
        //     const projectMap = await getCollection(COLLECTION_TYPE.projects);
        //     dispatch(setProjects(projectMap))
        // }
        // catch (error) {
        //     console.log(`Error in Projects/getProjects: ${error}`)
        // }

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