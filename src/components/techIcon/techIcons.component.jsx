/*
 * File: techSkills.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:16:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 3rd July 2023 10:14:31 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { IconsContainer, IconsWrapper, Icon, SquareOverlay, IconName } from "./techIcons.styles";

const TechIcons = ({ items }) => {
    const upperCaseItem = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    }
    return (
        <IconsContainer className="iconcontainer">
            <IconsWrapper>
                {items.map((item, index) => (
                    <Icon key={index}>
                        <SquareOverlay>
                            <IconName>{upperCaseItem(item)}</IconName>
                        </SquareOverlay>
                    </Icon>
                ))}
            </IconsWrapper>
        </IconsContainer>
    )
}

export default TechIcons;