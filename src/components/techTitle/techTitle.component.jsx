/*
 * File: techTitle.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:06:34 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 3rd July 2023 10:14:47 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import {
    TitleContainer, LeftCircle, RightCircle,
    LeftLine,
    RightLine,
    TitleText
} from "./techTitle.styles"

const TechTitle = ({ name }) => {

    const upperCaseName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return (
        <TitleContainer>
            <LeftCircle></LeftCircle>
            <LeftLine></LeftLine>
            <TitleText>{upperCaseName(name)}</TitleText>
            <RightLine></RightLine>
            <RightCircle></RightCircle>
        </TitleContainer>
    )
}

export default TechTitle;