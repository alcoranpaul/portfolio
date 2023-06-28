/*
 * File: techSkill.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:21:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 3:46:57 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import TechTitle from "../techTitle/techTitle.component";
import TechIcons from "../techIcon/techIcons.component";

const TechSkill = ({ name, icons }) => {
    return (
        <div>
            <TechTitle name={name} />
            <TechIcons icons={icons} />
        </div>
    )
}

export default TechSkill;