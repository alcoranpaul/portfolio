/*
 * File: techPreview.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 2:51:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 15th June 2023 4:12:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import TechSkill from "../techSkill/techSkill.component";

const SkillTech = [
    {
        name: "Web Development",
        icons: ["HTML", "CSS", "JavaScript", "Vue", "React", "React Router", "React Redux"]
    },
    {
        name: "Design and Prototyping",
        icons: ["Figma"]
    },
    {
        name: "Styling Framework",
        icons: ["Bootstrap"]
    },
    {
        name: "Backend Development",
        icons: ["Node.js", "Express.js"]
    }
];


const TechPreview = () => {
    return (
        <div>
            <TechSkill name={SkillTech[0].name} icons={SkillTech[0].icons} />
            <TechSkill name={SkillTech[1].name} icons={SkillTech[1].icons} />
            <TechSkill name={SkillTech[2].name} icons={SkillTech[2].icons} />
            <TechSkill name={SkillTech[3].name} icons={SkillTech[3].icons} />
        </div>
    );


}

export default TechPreview