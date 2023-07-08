/*
 * File: about.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 10:43:09 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import SectionCard from "../../components/sectionCard/sectionCard.component";
import { aboutData } from "../../data/about/aboutData";

import { AboutContainer } from './about.styles';

const About = () => {
    return (
        <AboutContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>

            {Object.entries(aboutData).map(([key, section]) => (
                <SectionCard key={key} title={section.title} body={section.body} />
            ))}


        </AboutContainer>
    )
}

export default About;