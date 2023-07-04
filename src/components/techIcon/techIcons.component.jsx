/*
 * File: techSkills.component.jsx
 * Project: portfolio
 * File Created: Thursday, 15th June 2023 3:16:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 3:20:49 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { IconsContainer, IconsWrapper, Icon, SquareOverlay, IconName, IconImage } from "./techIcons.styles";
import SkillImage from "../skillImage/skillImage.component";

const TechIcons = ({ items }) => {
    const itemsName = Object.keys(items);
    const itemsValue = Object.values(items);

    const upperCaseItemName = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    }

    return (
        <IconsContainer className="iconcontainer">
            <IconsWrapper>
                {itemsName.map((item, index) => (
                    <Icon key={index}>
                        {itemsValue[index] === "" && (
                            <SquareOverlay>
                                <IconName> {upperCaseItemName(item)}</IconName>
                            </SquareOverlay>
                        )}

                        {itemsValue[index] !== "" && (
                            <>
                                <SquareOverlay>

                                    <SkillImage src={itemsValue[index]} alt={itemsName[index]} />
                                </SquareOverlay>

                                <IconName>
                                    {upperCaseItemName(item)}
                                </IconName>
                            </>
                        )}
                    </Icon>
                ))}
            </IconsWrapper>
        </IconsContainer>
    )
}

export default TechIcons;