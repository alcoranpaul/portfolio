/*
 * File: techPreview.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 2:51:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 11:57:13 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import TechSkill from "../techSkill/techSkill.component";


const TechPreview = ({ skills }) => {

    const skillName = Object.keys(skills);
    const skillItems = Object.values(skills);


    return (
        <div >
            {
                skillItems.map((skillItem, index) => {
                    return <TechSkill name={skillName[index]} items={skillItem.items} level={skillItem.level} id={skillName[index]} key={skillName[index] + skillItem.level} />
                })
            }
        </div>
    );


}

export default TechPreview