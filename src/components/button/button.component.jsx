/*
 * File: button.component.jsx
 * Project: portfolio
 * File Created: Monday, 12th June 2023 8:29:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 9:55:33 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Button, ButtonIcon, ButtonText } from "./button.styles";
import { BUTTON_TYPES } from "./buttonTypes";


const CustomButton = ({ type, disabled, children, linkTo }) => {

    const handleClick = () => {
        window.open(linkTo, "_blank"); // Open link in a new tab
    };

    return (
        <Button type={type} disabled={disabled} onClick={handleClick}>
            <ButtonIcon>{children}</ButtonIcon>
            <ButtonText>
                {type === BUTTON_TYPES.DEMO ? 'Demo' : 'Github'}
            </ButtonText>
        </Button>
    )
}

export default CustomButton;