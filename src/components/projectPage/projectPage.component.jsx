/*
 * File: projectPage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 5th July 2023 6:00:10 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 8:13:23 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TableOfContents from "../tableOfContents/tableOfContents.component";
import { formatNotionContent, fetchNotionPageContent } from "../../utils/server/notion.server";
import { BUTTON_TYPES } from "../button/buttonTypes";

import CustomButton from "../button/button.component";
import GithubIcon from "../../data/components/button/githubIcon";
import DemoIcon from "../../data/components/button/demoIcon";
import {
    ProjectPageContainer,
    BodyContainer,
    MainContainer,
    TableOfContentsContainer,
    GoBackButton
} from "./projectPage.styles";



const buttonStyle = {
    width: "80%",
    margin: "20px 0 0 0",
    padding: "10px 0",
    fontSize: "1.2rem",
    letterSpacing: "1px",
    borderRadius: "5px",
};

const ProjectPage = ({ projects }) => {
    const [notionContent, setNotionContent] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [demo, setDemo] = useState("");
    const [github, setGithub] = useState("");

    const navigate = useNavigate();
    const { projectId } = useParams();
    const formattedProjectId = projectId.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();


    /**
     * Formats the content of the Notion page.
     * @returns {array} formattedContent - An array containing the formatted content.
     * @returns {array} headings - An array containing the headings.
     */
    const memoizedFormatNotionContent = useMemo(() => {
        // useMemo is used to prevent the formatNotionContent function from being called on every render.
        // The function is only called when the notionContent or title state changes
        return formatNotionContent(notionContent, title);
    }, [notionContent, title]);

    useEffect(() => {
        const projectKeys = Object.keys(projects);
        const foundProject = projectKeys.find(key => key === formattedProjectId);
        console.log(title)
        console.log(formattedProjectId)
        if (foundProject) { // If the project is found in the projects object, set the state
            const project = projects[foundProject];
            setTitle(project.title);
            setDescription(project.description);
            setDemo(project.demo);
            setGithub(project.github);

            try { // Try to get the stored content from localStorage
                const storedContent = localStorage.getItem(`projectPage_${project.title}`);
                if (storedContent) { // If the content is found, set the state
                    console.log("Found stored content with name ", `projectPage_${project.title}`);
                    setNotionContent(JSON.parse(storedContent));
                } else { // If the content is not found, fetch the content from Notion
                    console.log("NOT found stored content with name ", `projectPage_${project.title}`);
                    console.log("Notion ID: ", project.notionId);
                    const localStorageKey = `projectPage_${project.title}`;
                    fetchNotionPageContent(localStorageKey, project.notionId, (data) => setNotionContent(data));
                }
            }
            catch (err) {
                console.log("Error in projectPage", err);
            }
        }
    }, [projects, formattedProjectId]);

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
            <ProjectPageContainer >
                <TableOfContentsContainer>
                    <TableOfContents headings={memoizedFormatNotionContent.headings} />
                </TableOfContentsContainer>
                <MainContainer>
                    <h1>{title}</h1>
                    <p className="project-page-description">{description}</p>
                    <BodyContainer>{memoizedFormatNotionContent.formattedContent}</BodyContainer>
                </MainContainer>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    margin: '0 0 0 10px',
                    // backgroundColor: 'white',
                    width: '15%'
                }}>
                    <GoBackButton onClick={() => navigate('/projects')}>
                        Go back
                    </GoBackButton>
                    <CustomButton style={buttonStyle} type={BUTTON_TYPES.GITHUB} linkTo={github}>
                        <GithubIcon />
                    </CustomButton>
                    <CustomButton type={BUTTON_TYPES.DEMO} style={buttonStyle} linkTo={demo}>
                        <DemoIcon fill={"white"} />
                    </CustomButton>
                </div>
            </ProjectPageContainer>
        </motion.div>

    );
};

export default ProjectPage;
