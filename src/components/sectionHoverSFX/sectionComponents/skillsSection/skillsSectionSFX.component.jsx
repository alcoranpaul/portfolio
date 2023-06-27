/*
 * File: skillsSectionSFX.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 1:05:10 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 27th June 2023 2:08:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { WordCloud, Container } from './skillsSectionSFX.styles';
const SkillsSectionSFX = ({ show }) => {
    return (

        <Container>
            <WordCloud show={show}>
                <div class="forward">
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                </div>
                <div class="reverse">
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                    <span>SKILLS</span>
                </div>
            </WordCloud>
        </Container>


    )
}

export default SkillsSectionSFX;