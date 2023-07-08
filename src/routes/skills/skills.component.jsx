/*
 * File: skills.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:17 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 11:38:59 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSkillsStart } from '../../store/skills/skills.action';
import { selectSkills } from '../../store/skills/skills.selector';

import SkillTriangle from '../../components/skillTriangle/skillTriangle.component';
import SkillContent from '../../components/skillContent/skillContent.component';
import { SkillsContainer, SkillContentContainer, SkillTriangleContainer } from './skills.styles';


const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSkillLevel, setSelectedSkillLevel] = useState('-');
    const dispatch = useDispatch();
    const skills = useSelector(selectSkills);

    useEffect(() => {
        dispatch(fetchSkillsStart())
    }, [])

    const handleSelectCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    }

    const handleSelectSkillLevel = (selectedSkillLevel) => {
        setSelectedSkillLevel(selectedSkillLevel)
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>

            <SkillsContainer>
                <SkillTriangleContainer lg={3} className='skill-triangle-container'>
                    <SkillTriangle
                        skills={skills}
                        onSelectCategory={handleSelectCategory}
                        onSelectSkillLevel={handleSelectSkillLevel} />
                </SkillTriangleContainer>
                <SkillContentContainer lg={9} className='skill-content-container'>
                    <SkillContent skills={skills}
                        selectedCategory={selectedCategory}
                        selectedSkillLevel={selectedSkillLevel}
                    />
                </SkillContentContainer>
            </SkillsContainer>
        </motion.div>
    )
}

export default Skills;