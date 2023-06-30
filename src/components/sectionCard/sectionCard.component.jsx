/*
 * File: sectionCard.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 20th June 2023 3:21:31 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 10:19:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import React from 'react';
import { Container, Title, Body } from './sectionCard.styles';
import { Link } from 'react-router-dom';

const SectionCard = ({ title, body }) => {
    const bodyLines = body.split('\n');

    return (
        <Container>
            <Title id={title}>{title}</Title>
            <Body>
                {bodyLines.map((line, index) => (
                    <p key={index}>
                        {line.split('<b>').map((text, i) => {
                            if (i % 2 === 1) {
                                // Text between <b> tags
                                return <span className="bolded" key={i}>{text}</span>;
                            } else {
                                // Normal text
                                return text.split('<link>').map((segment, j) => {
                                    if (j % 2 === 1) {
                                        // Text between <link> tags
                                        const linkToWord = segment.trim(); // Trim the linkToWord to remove leading/trailing spaces
                                        const toValue = linkToWord.match(/\((.*?)\)/)[1]; // Extract value between parentheses
                                        const textWithoutParentheses = linkToWord.replace(/\(.*?\)/, ''); // Remove parentheses from link text
                                        return (
                                            <Link className="linkTo" to={toValue} key={j}>
                                                {textWithoutParentheses}
                                            </Link>
                                        );
                                    } else {
                                        // Normal text
                                        return segment;
                                    }
                                });
                            }
                        })}
                    </p>
                ))}
            </Body>
        </Container>
    );
};

export default SectionCard;

