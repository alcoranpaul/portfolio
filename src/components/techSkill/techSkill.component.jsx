/*
 * File: techSkill.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:21:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 5:21:46 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import TechTitle from "../techTitle/techTitle.component";
import TechIcons from "../techIcon/techIcons.component";
import { useEffect } from "react";


const TechSkill = ({ name, items, wrap }) => {

    return (
        <div
            style={{
                paddingBottom: "20px"
            }}
        >
            <TechTitle name={name} />
            <TechIcons items={items} wrap={wrap} />
        </div>
    )
}

export default TechSkill;