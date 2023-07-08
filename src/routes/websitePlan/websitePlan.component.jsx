/*
 * File: websitePlan.component.jsx
 * Project: portfolio
 * File Created: Friday, 7th July 2023 10:42:53 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 11:25:24 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect, useState, useMemo } from "react";


import { formatNotionContent, fetchNotionPageContent } from "../../utils/server/notion.server";

import { WebsitePlanContainer, BodyContainer } from './websitePlan.styles.jsx'

const pageTitle = "Website Plan"
const websitePlanID = "1829aae95502442bab583cc3b467588a";
const WebsitePlan = () => {
    const [notionContent, setNotionContent] = useState([]);

    /**Formats the content of the Notion page.
     * @returns {array} formattedContent - An array containing the formatted content.
     * @returns {array} headings - An array containing the headings.
     */
    const memoizedFormatNotionContent = useMemo(() => {
        // useMemo is used to prevent the formatNotionContent function from being called on every render.
        // The function is only called when the notionContent or title state changes
        return formatNotionContent(notionContent, pageTitle);
    }, [notionContent]);

    useEffect(() => {
        try { // Try to get the stored content from localStorage
            const localStorageKey = `websitePlanPage_${websitePlanID}`;
            console.log("localStorageKey", localStorageKey)
            const storedContent = localStorage.getItem(`worksPage_${websitePlanID}`);
            if (storedContent) { // If the content is found, set the state
                setNotionContent(JSON.parse(storedContent));
            } else { // If the content is not found, fetch the content from Notion
                fetchNotionPageContent(localStorageKey, websitePlanID, (data) => setNotionContent(data));
            }
        }
        catch (err) {
            console.log("Error in WebsitePlan", err);
        }

    }, []);

    return (
        <WebsitePlanContainer
            className='website-plan-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <BodyContainer>
                {memoizedFormatNotionContent.formattedContent}
            </BodyContainer>
            {/* <iframe src="https://v2-embednotion.com/93b7aab9c8a84ca895947a279134fd62?v=018489ff96f54860aedb413aab7093ac&pvs=4" className="notion-embed" title="Notion Embed">
            </iframe> //This is I FRAME from EMBEDNOTION.com*/}

        </WebsitePlanContainer>
    )
}

export default WebsitePlan