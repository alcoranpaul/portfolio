/*
 * File: skillContent.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:06:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 15th June 2023 2:52:47 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { SkillContentContainer } from "./skillContent.styles"
import TechPreview from "../techPreview/techPreview.component"

const SkillContent = () => {
    return (
        <SkillContentContainer>
            <TechPreview />
        </SkillContentContainer>
    )
}

export default SkillContent