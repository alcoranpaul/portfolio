/*
 * File: aboutSectionSFX.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 1:05:27 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 10:42:49 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Container, WordCloud } from "./aboutSectionSFX.styles";
const AboutSectionSFX = ({ show }) => {
    return (
        <Container>
            <WordCloud show={show}>
                <div className="forward">
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                </div>
                <div className="reverse">
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                </div>
            </WordCloud>
        </Container>
    )
}

export default AboutSectionSFX;