/*
 * File: skillTriangle.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:06:35 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 13th June 2023 11:25:06 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { SkillTriangleContainer, Title } from "./skillTriangle.styles"
import RadarGraph from "../radarGraph/radarGraph"
import DropdownButton from "../dropdownBtn/dropdownBtn.component"

const categoryOptions = ['Front-end', 'Back-End', 'Software and Others', 'ToolChain', 'Interested', 'All'];
const skillLevels = ['Foundation', 'Comfortable', 'Proficient', 'Interested', '-'];

const SkillTriangle = () => {

    const handleCategorySelection = (selectedCategory) => {
        console.log(`Selected category: ${selectedCategory}`);
        // Perform desired actions based on the selected category
    };


    return (
        <SkillTriangleContainer>
            <Title>Skillverse</Title>
            <RadarGraph />

            <DropdownButton categories={categoryOptions} onSelectCategory={handleCategorySelection} />
            <br />
            <DropdownButton categories={skillLevels} onSelectCategory={handleCategorySelection} />
        </SkillTriangleContainer>
    )
}

export default SkillTriangle
