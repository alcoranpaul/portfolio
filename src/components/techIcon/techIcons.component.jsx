/*
 * File: techSkills.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:16:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 28th June 2023 3:50:48 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { IconsContainer, IconsWrapper, Icon, SquareOverlay, IconName } from "./techIcons.styles";

const TechIcons = ({ icons }) => {
    return (
        <IconsContainer className="iconcontainer">
            <IconsWrapper>
                {icons.map((icon, index) => (
                    <Icon key={index}>
                        <SquareOverlay>
                            <IconName>{icon}</IconName>
                        </SquareOverlay>
                    </Icon>
                ))}
            </IconsWrapper>
        </IconsContainer>
    )
}

export default TechIcons;