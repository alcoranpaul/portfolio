/*
 * File: projectSnippet.component.jsx
 * Project: portfolio
 * File Created: Thursday, 22nd June 2023 10:36:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 27th June 2023 2:36:24 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import ProjectSectionSFX from "./sectionComponents/projectSection/projectSectionSFX.component";
import SkillsSectionSFX from "./sectionComponents/skillsSection/skillsSectionSFX.component";
import ContactSectionSFX from "./sectionComponents/contactSection/contactSectionSFX.component";
import AboutSectionSFX from "./sectionComponents/aboutSection/aboutSectionSFX.component";
const SectionHoverSFX = ({ buttonIndex }) => {
    console.log(buttonIndex); // Log the value of the "show" prop


    return (
        <div>
            {<ProjectSectionSFX show={buttonIndex === 0} />}
            {<SkillsSectionSFX show={buttonIndex === 1} />}
            {<ContactSectionSFX show={buttonIndex === 2} />}
            {<AboutSectionSFX show={buttonIndex === 3} />}
        </div>
    );
};

export default SectionHoverSFX;
