/*
 * File: contactSectionSFX.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 1:05:19 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 27th June 2023 2:33:45 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { WordCloud, Container } from './contactSectionSFX.styles';
const ContactSectionSFX = ({ show }) => {
    return (
        <Container>
            <WordCloud show={show}>
                <span>CONTACT</span>
                <span>CONTACT</span>
                <span>CONTACT</span>
                <span>CONTACT</span>
                <span>CONTACT</span>
            </WordCloud>
        </Container>
    )
}

export default ContactSectionSFX;