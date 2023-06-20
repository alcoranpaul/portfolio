/*
 * File: about.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 20th June 2023 3:41:13 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import SectionCard from "../../components/sectionCard/sectionCard.component";

const data = {
    section1: {
        title: "I ASPIRE TO CREATE MEANINGFUL APPLICATIONS",
        body: "Hello, I'm Paul Adrian Alcoran Reyes, but you can call me Paul. I'm a passionate Software Developer with a focus on creating meaningful applications. I have been honing my skills in JavaScript, React, C++, and even exploring the exciting world of Unreal Engine.\n\nThough I don't have a specific specialization yet, I've been working on various personal projects to gain practical experience and expand my knowledge. I embarked on my journey in the field of development in 2019, starting with my university studies and delving into self-study.\n\nThe ability to transform individual components into powerful applications is what truly inspires me. I believe in the power of technology to solve real-world problems and improve people's lives.\n\nWhile I may not have received any formal awards or recognition yet, I am driven by a strong desire to continuously learn and grow as a developer. I am constantly challenging myself to push boundaries and explore new possibilities in the ever-evolving world of technology.\n\nI am excited about the opportunity to collaborate, contribute, and make a positive impact through my development skills. Let's connect and explore how we can bring innovative ideas to life. Together, we can create something meaningful and impactful."
    },
    section2: {
        title: "MY VALUES",
        body: "In my leisure time, I engage in activities that challenge my strategic thinking and foster personal growth. Collaborating with others in dynamic team environments, I prioritize effective communication and values-driven actions. Guided by principles from Biblical wisdom, I approach personal and professional contexts with integrity, compassion, and a commitment to continuous growth.\n\nWithin teams, I create a positive atmosphere by offering support and affirmation during challenges. I believe in the power of kind words and constructive feedback to enhance performance. Addressing negativity constructively, I strive to encourage inclusivity. If necessary, I take appropriate action by reporting such behavior to authorities.\n\nThese experiences underscore the significance of effective communication in building strong relationships and fostering trust. Actively listening, articulating my thoughts clearly, and seeking clarity promote open dialogue and understanding. I firmly believe in the transformative power of communication to drive collaboration and achieve successful outcomes.\n\nMoreover, my collaborative efforts extend to a joint venture, True Design Clothing, where I partner with a friend possessing complementary skills and expertise. Leveraging our strengths, we create a compelling and impactful clothing brand. This collaboration allows me to apply my communication and teamwork skills while gaining insights into the world of entrepreneurship."
    },
    section3: {
        title: "HOBBIES",
        body: "In my free time, I find joy and fulfillment in engaging in strategic multiplayer games, as they challenge my perceptions, enhance my flexibility of mind, and provide opportunities for personal growth. Through these games, I not only enjoy the thrill of competition but also develop valuable skills such as teamwork, communication, and adaptability. \n\nCollaborating with a team of five players strengthens my confidence in working alongside others and being a reliable team player. These experiences align seamlessly with my professional interests, as they foster effective communication and help me build essential skills for collaboration in the workplace. Additionally, I find great satisfaction in pursuing personal projects, which allow me to see the tangible results of my work and effort. This not only keeps me connected to my values but also provides motivation and a sense of accomplishment that fuels my desire to continuously learn and improve."
    }
};


const About = () => {
    return (
        <div>
            {Object.entries(data).map(([key, section]) => (
                <SectionCard key={key} title={section.title} body={section.body} />
            ))}
        </div>
    )
}

export default About;