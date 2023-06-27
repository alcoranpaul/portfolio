/*
 * File: aboutSectionSFX.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 1:05:27 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 27th June 2023 2:41:23 pm
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
                <div class="forward">
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                    <span>ABOUT</span>
                </div>
                <div class="reverse">
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