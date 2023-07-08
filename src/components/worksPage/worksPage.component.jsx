/*
 * File: worksPage.component.jsx
 * Project: portfolio
 * File Created: Friday, 7th July 2023 5:23:41 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 8:13:37 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

import TableOfContents from "../tableOfContents/tableOfContents.component";
import { formatNotionContent, fetchNotionPageContent } from "../../utils/server/notion.server";

import { WorkPageContainer, MainContainer, BodyContainer, GoBackButton, TableOfContentsContainer } from './worksPage.styles';

const WorksPage = ({ works }) => {
    const [notionContent, setNotionContent] = useState([]);
    const [title, setTitle] = useState("");
    const [tech, setTech] = useState([]);
    const [date, setDate] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();
    const { workID } = useParams();


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
        const workKeys = Object.keys(works);
        const foundWork = workKeys.find(key => key === workID);

        if (foundWork) { // If the work is found in the works object, set the state
            const work = works[foundWork];
            setTitle(work.title);
            setTech(work.tech);
            setDate(work.date);
            setRole(work.role);

            try { // Try to get the stored content from localStorage
                const storedContent = localStorage.getItem(`worksPage_${workID}`);
                if (storedContent) { // If the content is found, set the state
                    console.log("Found stored content with name ", `worksPage_${workID}`);
                    setNotionContent(JSON.parse(storedContent));
                } else { // If the content is not found, fetch the content from Notion
                    console.log("NOT found stored content with name ", `worksPage_${workID}`);
                    const localStorageKey = `worksPage_${workID}`;
                    fetchNotionPageContent(localStorageKey, work.notionId, (data) => setNotionContent(data));
                }
            }
            catch (err) {
                console.log("Error in worksPage", err);
            }
        }
    }, [works, workID]);

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
            <WorkPageContainer>
                <TableOfContentsContainer>
                    <TableOfContents headings={memoizedFormatNotionContent.headings} />
                </TableOfContentsContainer>
                <MainContainer>
                    <h1 className="work-page-title">{title}</h1>
                    <div className="work-page-details">
                        <span className="work-page-role">
                            <span className="work-page-details-heading">
                                Role:
                            </span> {role}
                        </span>
                        <span className="work-page-date">
                            <span className="work-page-details-heading">
                                Date:
                            </span> {date}
                        </span>
                        <span className="work-page-tech">
                            <span className="work-page-details-heading">
                                Tech Stack:
                            </span> {tech.join(' || ')}
                        </span>
                    </div>
                    <BodyContainer>
                        {memoizedFormatNotionContent.formattedContent}
                    </BodyContainer>
                </MainContainer>

            </WorkPageContainer>
            <GoBackButton onClick={() => navigate('/work')}> Go Back</GoBackButton>
        </motion.div>
    )
}

export default WorksPage;