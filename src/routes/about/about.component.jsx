/*
 * File: about.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:50 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 21st June 2023 11:32:13 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import SectionCard from "../../components/sectionCard/sectionCard.component";
import { motion } from "framer-motion";
const data = {
    section1: {
        title: "I ASPIRE TO CREATE MEANINGFUL APPLICATIONS",
        body: "Hello, I'm Paul Adrian Alcoran Reyes, but you can call me <b>Paul<b>. I'm a passionate Software Developer with a focus on creating <link>(/projects)meaningful applications<link>. I have been honing my skills in <b>JavaScript<b>, <b>React<b>, <b>C++<b>, and even exploring the exciting world of <b>Unreal Engine<b>.\n\nThough I don't have a specific specialization yet, I've been working on various <link>(/projects)personal projects<link> to gain practical experience and expand my knowledge. I embarked on my journey in the field of development in 2019, starting with my <link>(/education)university studies<link> and delving into self-study.\n\nThe ability to transform individual components into powerful applications is what truly inspires me. I believe in the power of technology to solve real-world problems and improve people's lives.\n\nWhile I may not have received any formal experience or recognition yet, I am driven by a strong desire to continuously learn and grow as a developer. I am constantly challenging myself to push boundaries and explore new possibilities in the ever-evolving world of technology.\n\nI am excited about the opportunity to collaborate, contribute, and make a positive impact through my development skills. Let's <link>(/contact)connect<link> and explore how we can bring innovative ideas to life. Together, we can create something meaningful and impactful."
    },
    section2: {
        title: "MY VALUES",
        body: "In my leisure time, I engage in activities that challenge my <b>strategic thinking<b> and foster personal growth. Collaborating with others in dynamic team environments, I prioritize <b>effective communication<b> and values-driven actions. Guided by principles from Biblical wisdom, I approach personal and professional contexts with <b>integrity<b>, compassion, and a commitment to continuous growth.\n\nWithin teams, I create a <b>positive atmosphere<b> by offering support and affirmation during challenges. I believe in the power of kind words and <b>constructive feedback<b> to enhance performance. Addressing negativity constructively, I strive to encourage inclusivity.\n\nThese experiences underscore the significance of effective communication in building strong relationships and fostering trust. Actively listening, articulating my thoughts clearly, and seeking clarity promote open dialogue and understanding. I firmly believe in the transformative power of communication to drive collaboration and achieve successful outcomes.\n\nMoreover, my collaborative efforts extend to a joint venture, True Design Clothing, where I partner with a friend possessing complementary skills and expertise. Leveraging our strengths, we create a compelling and impactful clothing brand. This collaboration allows me to apply my communication and teamwork skills while gaining insights into the world of <b>entrepreneurship<b>."
    },
    section3: {
        title: "HOBBIES",
        body: "In my free time, I find joy and fulfillment in engaging in <link>(/contact)strategic multiplayer games<link>, as they challenge my perceptions, enhance my flexibility of mind, and provide opportunities for personal growth. Through these games, I not only enjoy the thrill of competition but also develop valuable skills such as <b>teamwork<b>, <b>communication<b>, and <b>adaptability<b>.\n\n<b>Collaborating<b> with a team of five players strengthens my confidence in working alongside others and being a reliable team player. These experiences align seamlessly with my professional interests, as they foster <b>effective<b> communication and help me build essential skills for collaboration in the workplace. Additionally, I find great satisfaction in pursuing personal projects, which allow me to see the tangible results of my work and effort. This not only keeps me connected to my values but also provides motivation and a sense of accomplishment that fuels my desire to <b>continuously<b> <b>learn<b> and <b>improve<b>."
    }
};


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                overflow: 'hidden',
                width: '100%'
            }}>
            {Object.entries(data).map(([key, section]) => (
                <SectionCard key={key} title={section.title} body={section.body} />
            ))}
        </motion.div>
    )
}

export default About;