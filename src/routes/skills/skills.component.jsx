/*
 * File: skills.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:17 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 21st June 2023 11:10:34 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import SkillContent from '../../components/skillContent/skillContent.component';
import SkillTriangle from '../../components/skillTriangle/skillTriangle.component';
import { SkillsContainer, ChildrenContainer, ChildrenRow } from './skills.styles';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                overflow: 'hidden',
                width: '100%'
            }}>

            <SkillsContainer>
                <ChildrenRow>
                    <ChildrenContainer lg={3}><SkillTriangle /></ChildrenContainer>
                    <ChildrenContainer lg={9}><SkillContent /></ChildrenContainer>
                </ChildrenRow>
            </SkillsContainer>
        </motion.div>
    )
}

export default Skills;