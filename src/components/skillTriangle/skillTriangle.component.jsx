/*
 * File: skillTriangle.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:06:35 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 8th July 2023 12:14:23 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { SkillTriangleContainer, Title, VisualContainer, SorterContainer } from "./skillTriangle.styles"
import RadarGraph from "../radarGraph/radarGraph"
import DropdownButton from "../dropdownBtn/dropdownBtn.component"

const skillLevels = ['Foundation', 'Comfortable', 'Proficient', 'Interested', '-'];

const SkillTriangle = ({ onSelectCategory, onSelectSkillLevel, skills }) => {

    const skillName = Object.keys(skills);
    skillName.push('All');


    return (
        <SkillTriangleContainer>
            <VisualContainer>
                <Title>Skillverse</Title>
                <RadarGraph />

            </VisualContainer>

            <SorterContainer>

                <DropdownButton categories={skillName} onSelectCategory={onSelectCategory} />
                <br />
                <DropdownButton categories={skillLevels} onSelectCategory={onSelectSkillLevel} />
            </SorterContainer>

        </SkillTriangleContainer>
    )
}

export default SkillTriangle
