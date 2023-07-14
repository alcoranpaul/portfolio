/*
 * File: about.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 9:34:00 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import SectionCard from "../../components/sectionCard/sectionCard.component";
import { aboutData } from "../../data/about/aboutData";

import { AboutContainer } from './about.styles';

const About = () => {

    const pfpIMG = process.env.PUBLIC_URL + '/data/pfp.png';
    return (
        <AboutContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <div className="pfp-container">
                <img src={pfpIMG} alt="pfp" className="pfp-img" />
            </div>
            {Object.entries(aboutData).map(([key, section]) => (
                <SectionCard key={key} title={section.title} body={section.body} />
            ))}


        </AboutContainer>
    )
}

export default About;