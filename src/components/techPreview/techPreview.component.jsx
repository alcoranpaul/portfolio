/*
 * File: techPreview.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 2:51:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 5:21:46 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect, useState } from "react";
import TechSkill from "../techSkill/techSkill.component";

const TechPreview = ({ skills, selectedCategory, selectedSkillLevel }) => {
    const [filteredSkills, setFilteredSkills] = useState([]);

    // useEffect to update the filtered skills when selectedCategory or selectedSkillLevel changes
    useEffect(() => {
        filterSkills(selectedCategory, selectedSkillLevel);
    }, [selectedCategory, selectedSkillLevel]);

    const filterSkills = (selectedCategory, selectedSkillLevel) => {
        const filteredSkills = Object.entries(skills).reduce(
            (filtered, [name, items]) => {
                const categoryMatch =
                    selectedCategory === "All" || name === selectedCategory;
                const levelMatch =
                    selectedSkillLevel === "-" ||
                    items.level.toLowerCase() === selectedSkillLevel.toLowerCase();

                if (categoryMatch && levelMatch) {
                    filtered.push({ name, items });
                }

                return filtered;
            }, []);
        setFilteredSkills(filteredSkills);
    };

    return (
        <div>
            {filteredSkills.map((skill, index) => (
                <TechSkill key={index} name={skill.name} items={skill.items.items} wrap={filteredSkills.length} />

            ))}
        </div>
    );
};

export default TechPreview;
