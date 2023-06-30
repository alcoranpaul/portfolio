/*
 * File: projects.components.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 6:27:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 10:19:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setProjects } from "../../store/projects/projects.action";
import { COLLECTION_TYPE, getCollection } from "../../utils/firebase/firebase.utils";
import ProjectPreview from "../../components/projectPreview/projectPreview.component";

const Projects = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getProjects = async () => {
            try {
                const projectMap = await getCollection(COLLECTION_TYPE.projects);
                dispatch(setProjects(projectMap))
            }
            catch (error) {
                console.log(`Error in Projects/getProjects: ${error}`)
            }
        }

        return getProjects;
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