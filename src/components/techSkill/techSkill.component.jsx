/*
 * File: techSkill.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:21:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 11:58:00 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import TechTitle from "../techTitle/techTitle.component";
import TechIcons from "../techIcon/techIcons.component";


const TechSkill = ({ name, items }) => {

    return (
        <div
            style={{
                paddingBottom: "20px"
            }}
        >
            <TechTitle name={name} />
            <TechIcons items={items} />
        </div>
    )
}

export default TechSkill;