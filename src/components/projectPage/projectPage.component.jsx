/*
 * File: projectPage.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 5th July 2023 6:00:10 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 6th July 2023 11:03:28 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import CustomButton from "../button/button.component";
import TableOfContents from "../tableOfContents/tableOfContents.component";
import { formatNotionContent } from "../../utils/server/notion.server";

import {
    ProjectPageContainer,
    BodyContainer,
    MainContainer,
    TableOfContentsContainer,
    GoBackButton
} from "./projectPage.styles";







const ProjectPage = ({ projects }) => {
    const [notionContent, setNotionContent] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [blurHash, setBlurHash] = useState("");
    const [demo, setDemo] = useState("");
    const [github, setGithub] = useState("");

    const { projectId } = useParams();
    const formattedProjectId = projectId.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

    /**
     * Fetches the content of the Notion page using the Notion API.
     */
    const fetchNotionPageContent = async (title, notionID) => {
        console.log("Fetching content");
        // const response = await fetch('http://localhost:3000/', {
        const response = await fetch('https://portfolio-server-jisj.onrender.com/', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Notion-Version': '2022-02-22',
                'id': notionID,
                'page_size': 100
            }
        });
        const data = await response.json();
        setNotionContent(data);

        localStorage.setItem(`projectPage_${title}`, JSON.stringify(data));
    };

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

        if (foundProject) { // If the project is found in the projects object, set the state
            const project = projects[foundProject];
            setTitle(project.title);
            setDescription(project.description);
            setImgUrl(project.imgURL);
            setBlurHash(project.blurHash);
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
                    fetchNotionPageContent(project.title, project.notionId);
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
            <ProjectPageContainer>
                <TableOfContentsContainer>
                    <TableOfContents headings={memoizedFormatNotionContent.headings} />
                </TableOfContentsContainer>
                <MainContainer>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <BodyContainer>{memoizedFormatNotionContent.formattedContent}</BodyContainer>
                </MainContainer>
                <div>
                    <GoBackButton>
                        Go back
                    </GoBackButton>
                </div>
            </ProjectPageContainer>
        </motion.div>

    );
};

export default ProjectPage;
