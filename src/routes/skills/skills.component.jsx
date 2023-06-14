/*
 * File: skills.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:17 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 13th June 2023 8:28:29 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Col } from 'react-bootstrap';
import SkillContent from '../../components/skillContent/skillContent.component';
import SkillTriangle from '../../components/skillTriangle/skillTriangle.component';
import { SkillsContainer, ChildrenContainer, ChildrenRow } from './skills.styles';

const Skills = () => {
    return (
        <SkillsContainer>
            <ChildrenRow>
                <ChildrenContainer lg={3}><SkillTriangle /></ChildrenContainer>
                <ChildrenContainer lg={9}><SkillContent /></ChildrenContainer>
            </ChildrenRow>
        </SkillsContainer>
    )
}

export default Skills;