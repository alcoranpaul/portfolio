/*
 * File: tableOfContents.component.jsx
 * Project: portfolio
 * File Created: Thursday, 6th July 2023 7:07:27 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 6th July 2023 7:54:55 pm
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

    return <ul>{headings.map((heading) => renderHeading(heading))}</ul>;
};

export default TableOfContents;
