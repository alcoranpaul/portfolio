/*
 * File: skills.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:17 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 3rd July 2023 11:19:11 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSkillsStart } from '../../store/skills/skills.action';
import { selectSkills } from '../../store/skills/skills.selector';

import SkillTriangle from '../../components/skillTriangle/skillTriangle.component';
import SkillContent from '../../components/skillContent/skillContent.component';
import { SkillsContainer, SkillContentContainer, SkillTriangleContainer } from './skills.styles';


const Skills = () => { //TODO: simplify this
    const dispatch = useDispatch();
    const skills = useSelector(selectSkills);

    useEffect(() => {
        if (Object.keys(skills).length > 0) {
            console.log(`Skills/getSkills: skills already exists`)
            return;
        }
        else {
            dispatch(fetchSkillsStart())
        }
    }, [])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                width: '100%'
            }}>

            <SkillsContainer>
                <SkillTriangleContainer lg={3} className='skill-triangle-container'><SkillTriangle /></SkillTriangleContainer>
                <SkillContentContainer lg={9} className='skill-content-container'><SkillContent skills={skills} /></SkillContentContainer>
            </SkillsContainer>
        </motion.div>
    )
}

export default Skills;