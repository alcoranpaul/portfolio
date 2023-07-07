/*
 * File: notion.server.js
 * Project: portfolio
 * File Created: Thursday, 6th July 2023 11:00:01 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 6th July 2023 11:07:01 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

export const formatNotionContent = (content, setTitle) => {
    const headings = [];
    let olStarted = false; // Check if <ol> has been started
    let ulStarted = false; // Check if <ul> has been started
    let listItems = []; // Store list items for <ol> or <ul>
    const WORD_TYPE = {
        heading1: "heading_1",
        heading2: "heading_2",
        paragraph: "paragraph",
        bulletedListItem: "bulleted_list_item",
        numberedListItem: "numbered_list_item",
        bold: "bold",
        code: "code",
        default: "default",
    }

    const formattedContent = content.reduce((result, item, index) => {
        const { type, content } = item;

        const text = content.join("");
        const id = setTitle + text;

        // Store heading information
        if (type === WORD_TYPE.heading1 || type === WORD_TYPE.heading2) {
            headings.push({ id, text, type });
        }

        const generateRandomKey = () => Math.floor(Math.random() * index * 1000000);

        switch (type) {
            case WORD_TYPE.heading1:
                // Close <ul> if started before adding a heading
                if (ulStarted) {
                    const ul = <ul key={generateRandomKey()}>{listItems}</ul>;
                    listItems = [];
                    result.push(ul);
                    ulStarted = false;
                }
                // Add heading element
                result.push(<h2 key={generateRandomKey()} id={id}>{text}</h2>);
                break;
            case WORD_TYPE.heading2:
                // Close <ul> if started before adding a heading
                if (ulStarted) {
                    const ul = <ul key={generateRandomKey()}>{listItems}</ul>;
                    listItems = [];
                    result.push(ul);
                    ulStarted = false;
                }
                // Add heading element
                result.push(<h3 key={generateRandomKey()} id={id}>{text}</h3>);
                break;
            case WORD_TYPE.numberedListItem:
                // Close <ul> if started before adding a numbered list item
                if (ulStarted) {
                    const ul = <ul key={generateRandomKey()}>{listItems}</ul>;
                    listItems = [];
                    result.push(ul);
                    ulStarted = false;
                }
                // Check if <ol> has started, add item accordingly
                if (!olStarted) {
                    olStarted = true;
                    listItems.push(<li key={generateRandomKey()}>{text}</li>);
                } else {
                    listItems.push(<li key={generateRandomKey()}>{text}</li>);
                }
                break;
            case WORD_TYPE.bulletedListItem:
                // Close <ol> if started before adding a bulleted list item
                if (olStarted) {
                    const ol = <ol key={generateRandomKey()}>{listItems}</ol>;
                    listItems = [];
                    result.push(ol);
                    olStarted = false;
                }
                // Check if <ul> has started, add item accordingly
                if (!ulStarted) {
                    ulStarted = true;
                    listItems.push(<li key={generateRandomKey()}>{text}</li>);
                } else {
                    listItems.push(<li key={generateRandomKey()}>{text}</li>);
                }
                break;
            case WORD_TYPE.paragraph:
                // Close <ol> if started before adding a paragraph
                if (olStarted) {
                    const ol = <ol key={generateRandomKey()}>{listItems}</ol>;
                    listItems = [];
                    result.push(ol);
                    olStarted = false;
                }
                // Close <ul> if started before adding a paragraph
                if (ulStarted) {
                    const ul = <ul key={generateRandomKey()}>{listItems}</ul>;
                    listItems = [];
                    result.push(ul);
                    ulStarted = false;
                }
                // Check if content has two items and format accordingly
                if (content.length === 2) {
                    const boldText = content[0] || "";
                    const regularText = content[1] || "";
                    result.push(
                        <p key={generateRandomKey()}>
                            <strong>{boldText}</strong> {regularText}
                        </p>
                    );
                } else if (content.length > 1) {
                    const formattedContent = content.map((item, itemIndex) => {
                        const text = item || "";
                        const isOdd = itemIndex % 2 === 0;
                        const formattedText = isOdd ? (
                            text
                        ) : (
                            <span key={generateRandomKey()} className="codeStyle">
                                {text}
                            </span>
                        );
                        return formattedText;
                    });

                    result.push(
                        <p key={generateRandomKey()}>{formattedContent}</p>
                    );
                } else {
                    // Add paragraph element
                    result.push(<p key={generateRandomKey()}>{text}</p>);
                }
                break;
            default:
                // Default case for other types (if any)
                result.push(<p key={generateRandomKey()}>{text}</p>);
                break;
        }

        return result;
    }, []);

    // Close the <ol> or <ul> if it was started and not closed
    if (olStarted) {
        const ol = <ol>{listItems}</ol>;
        listItems = [];
        formattedContent.push(ol);
    } else if (ulStarted) {
        const ul = <ul>{listItems}</ul>;
        listItems = [];
        formattedContent.push(ul);
    }

    return { formattedContent, headings };
};
