/*
 * File: tableOfContents.component.jsx
 * Project: portfolio
 * File Created: Thursday, 6th July 2023 7:07:27 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 2:19:31 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from "react";

import { TableOfContentsItem, VerticalLine } from './tableOfContents.styles.jsx';

const TableOfContents = ({ headings }) => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderHeading = (heading) => {
        const { id, text, type } = heading;
        return (

            <TableOfContentsItem key={id} onClick={() => scrollToSection(id)} type={type}>
                <VerticalLine type={type}></VerticalLine>
                {text}
            </TableOfContentsItem>

        );
    };

    return (
        <>
            <h1 style={{
                fontSize: "1.8rem",
                color: "var(--color-pageContent-h3)",
                borderBottom: "1px solid var(--color-pageContent-h3)",
                marginBottom: "1rem",
                cursor: "default",
                userSelect: "none",
                textAlign: "left"
            }}> Table of Contents</h1>
            <ul>{headings.map((heading) => renderHeading(heading))}</ul>
        </>
    );
};

export default TableOfContents;
