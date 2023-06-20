/*
 * File: sectionCard.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 20th June 2023 3:21:31 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 20th June 2023 3:34:51 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Container, Title, Body } from "./sectionCard.styles";



const SectionCard = ({ title, body }) => {
    const bodyLines = body.split('\n'); // Split the body text by newline character


    return (
        <Container>
            <Title>{title}</Title>
            <Body>
                {bodyLines.map((line, index) => (
                    <p key={index}>{line}</p> // Create a separate paragraph element for each line
                ))}
            </Body>
        </Container>
    );
};

export default SectionCard;