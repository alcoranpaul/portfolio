/*
 * File: button.component.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 8:29:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 6:15:01 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Button, ButtonIcon, ButtonText } from "./button.styles";
import { BUTTON_TYPES } from "./buttonTypes";


const CustomButton = ({ type, disabled, children, linkTo, disableLink }) => {

    const handleClick = () => {
        if (disableLink) return;
        window.open(linkTo, "_blank"); // Open link in a new tab
    };

    const handleType = (buttonType) => {
        switch (buttonType) {
            case BUTTON_TYPES.DEMO:
                return 'Demo';
            case BUTTON_TYPES.GITHUB:
                return 'Github';
            case BUTTON_TYPES.CASE_STUDY:
                return 'Case-study';
            default:
                break;
        }
    }

    return (
        <Button type={type} disabled={disabled} onClick={handleClick}>
            <ButtonIcon>{children}</ButtonIcon>
            <ButtonText>
                {handleType(type)}
            </ButtonText>
        </Button>
    )
}

export default CustomButton;