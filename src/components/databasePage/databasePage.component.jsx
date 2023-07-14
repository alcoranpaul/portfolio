/*
 * File: databasePage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 28th June 2023 3:59:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 1:56:41 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectProjects } from "../../store/projects/projects.selector";
import { selectSkills } from "../../store/skills/skills.selector";
import { selectWorks } from "../../store/works/works.selector";

import TextArea from "../textArea/textArea.component";

import { DatabasePageContainer } from './databasePage.styles';

import { COLLECTION_TYPE, updateCollection } from "../../utils/firebase/firebase.utils";
import { refreshProjects } from "../../store/projects/projects.action";
import { refreshSkills } from "../../store/skills/skills.action";
import { refreshWorks } from "../../store/works/works.action";
const DatabasePage = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const skills = useSelector(selectSkills);
    const works = useSelector(selectWorks);

    const [projectsString, setProjectsString] = useState(
        JSON.stringify(projects, null, 2)
    );
    const [skillsString, setSkillsString] = useState(
        JSON.stringify(skills, null, 2)
    );
    const [worksString, setWorksString] = useState(
        JSON.stringify(works, null, 2)
    );


    const handleProjectsChange = (event) => {
        setProjectsString(event.target.value);
    };
    const handleSkillsChange = (event) => {
        setSkillsString(event.target.value);
    };
    const handleWorksChange = (event) => {
        setWorksString(event.target.value);
    };

    const handleSave = async (value, collectionKey) => {
        try {
            const data = JSON.parse(value);
            await updateCollection(collectionKey, data);
            switch (collectionKey) {
                case COLLECTION_TYPE.projects:
                    dispatch(refreshProjects());
                    break;
                case COLLECTION_TYPE.skills:
                    dispatch(refreshSkills());
                    break;
                case COLLECTION_TYPE.works:
                    dispatch(refreshWorks());
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }

    };

    return (
        <DatabasePageContainer>
            <h2>Projects</h2>
            <TextArea
                value={projectsString}
                onChange={handleProjectsChange}
                collectionType={COLLECTION_TYPE.projects}
                onSubmit={handleSave} />
            <br />
            <h2>Skills</h2>
            <TextArea
                value={skillsString}
                onChange={handleSkillsChange}
                collectionType={COLLECTION_TYPE.skills}
                onSubmit={handleSave} />
            <br />
            <h2>Works</h2>
            <TextArea
                value={worksString}
                onChange={handleWorksChange}
                collectionType={COLLECTION_TYPE.works}
                onSubmit={handleSave} />
        </DatabasePageContainer>
    );
};

export default DatabasePage;
