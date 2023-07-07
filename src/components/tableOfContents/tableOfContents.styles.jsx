/*
 * File: tableOfContents.styles.jsx
 * Project: portfolio
 * File Created: Thursday, 6th July 2023 7:48:55 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 6th July 2023 7:59:33 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from "styled-components";


export const TableOfContentsItem = styled.li`
    margin-left: ${({ type }) => (type === "heading_2" ? "20px" : "0")};
    cursor: pointer;
    list-style-type: none;
    position: relative;
    font-size: ${({ type }) => (type === "heading_2" ? "1rem" : "1.2rem")};
    color: ${({ type }) => (type === "heading_2" ? "var(--color-pageContent-h3)" : "var(--color-pageContent-h2)")};
    padding-bottom: 10px;

    transition: all 0.2s ease-in-out;
    &:hover {
        color: var(--color-text);
        text-decoration: underline;
    }
`;

export const VerticalLine = styled.span`
    border-left: ${({ type }) => (type === "heading_2" ? "1px solid white" : "none")};
    height: 100%;
    position: absolute;
    left: -10px;
    top: 0;
`;