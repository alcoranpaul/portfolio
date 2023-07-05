/*
 * File: projectPage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 5th July 2023 6:00:10 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 6:32:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../button/button.component";

const ProjectPage = ({ projects }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [blurHash, setBlurHash] = useState("");
    const [demo, setDemo] = useState("");
    const [github, setGithub] = useState("");



    const { projectId } = useParams();
    const formattedProjectId = projectId.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    useEffect(() => {
        const projectKeys = Object.keys(projects);
        const foundProject = projectKeys.find(key => key === formattedProjectId);

        if (foundProject) {
            const project = projects[foundProject];
            setTitle(project.title);
            setDescription(project.description);
            setImgUrl(project.imgURL);
            setBlurHash(project.blurHash);
            setDemo(project.demo);
            setGithub(project.github);
        }
    }, [projects, formattedProjectId]);

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>

        </div>
    );
}

export default ProjectPage;