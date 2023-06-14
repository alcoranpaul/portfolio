/*
 * File: skillTriangle.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:06:35 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 13th June 2023 10:57:53 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { SkillTriangleContainer, Title } from "./skillTriangle.styles"
import RadarGraph from "../radarGraph/radarGraph"

const SkillTriangle = () => {
    return (
        <SkillTriangleContainer>
            <Title>Skillverse</Title>
            <RadarGraph />
        </SkillTriangleContainer>
    )
}

export default SkillTriangle
