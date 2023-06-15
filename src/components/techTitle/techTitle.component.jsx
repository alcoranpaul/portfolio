/*
 * File: techTitle.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:06:34 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 15th June 2023 3:29:47 pm
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
    return (
        <TitleContainer>
            <LeftCircle></LeftCircle>
            <LeftLine></LeftLine>
            <TitleText>{name}</TitleText>
            <RightLine></RightLine>
            <RightCircle></RightCircle>
        </TitleContainer>
    )
}

export default TechTitle;