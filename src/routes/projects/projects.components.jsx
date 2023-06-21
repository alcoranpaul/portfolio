/*
 * File: projects.components.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 6:27:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 21st June 2023 11:29:09 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectPreview from "../../components/projectPreview/projectPreview.component";

const Projects = () => {
    useEffect(() => {
        // Reset scroll position when component mounts
        window.scrollTo(0, 0);
    }, []);

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