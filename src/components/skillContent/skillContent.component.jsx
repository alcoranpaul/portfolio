/*
 * File: skillContent.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 8:06:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 3rd July 2023 11:26:09 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { SkillContentContainer } from "./skillContent.styles"
import TechPreview from "../techPreview/techPreview.component"

const SkillContent = ({ skills }) => {
    return (
        <SkillContentContainer>
            <TechPreview skills={skills} />
        </SkillContentContainer>
    )
}

export default SkillContent