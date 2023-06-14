/*
 * File: skillTriangle.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:06:35 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 14th June 2023 1:12:10 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { SkillTriangleContainer, Title, VisualContainer, SorterContainer } from "./skillTriangle.styles"
import RadarGraph from "../radarGraph/radarGraph"
import DropdownButton from "../dropdownBtn/dropdownBtn.component"
import SearchBar from "../searchBar/searchBar.component";

const categoryOptions = ['Front-end', 'Back-End', 'Software and Others', 'ToolChain', 'Interested', 'All'];
const skillLevels = ['Foundation', 'Comfortable', 'Proficient', 'Interested', '-'];

const SkillTriangle = () => {

    const handleCategorySelection = (selectedCategory) => {
        console.log(`Selected category: ${selectedCategory}`);
        // Perform desired actions based on the selected category
    };


    return (
        <SkillTriangleContainer>
            <VisualContainer>
                <Title>Skillverse</Title>
                <RadarGraph />

            </VisualContainer>

            <SorterContainer>
                <SearchBar />
                <br />
                <DropdownButton categories={categoryOptions} onSelectCategory={handleCategorySelection} />
                <br />
                <DropdownButton categories={skillLevels} onSelectCategory={handleCategorySelection} />
            </SorterContainer>

        </SkillTriangleContainer>
    )
}

export default SkillTriangle
