/*
 * File: education.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:08 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 15th June 2023 11:55:55 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import './education.styles.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const timelineData = [
    {
        date: '2019',
        title: '3rd year, Bachelors of Science in Computer Science',
        description: 'Expected Graduation: 2025\n\nRelevant Coursework:\n- Computer Programming for Scientists and Engineers\n- Introductory Computer Science 2\n- Data Structures and Algorithms\n- Engineering Algorithms\n- Digital Logic Systems\n- Micro-processing Systems\n- Design in Engineering\n\nOther Coursework:\n- Intro to Statistics\n- Intro to Electrical and Computer Engineering\n- Intro to Thermal Sciences\n- Engineering Communications\n- Engineering Economics\n\nSchroeder Scholarship Recipient\n\nRecipient of the Full 4-year Scholarship awarded by the Schroeder Foundation, this esteemed opportunity has allowed for the pursuit of a Software Engineering career from 2019 to 2023.\n\nThe scholarship has been instrumental in facilitating an immersive educational journey and fostering academic growth. Gratitude is extended to the Schroeder Foundation for their generous investment in fostering future talents and providing unwavering support throughout the educational endeavor.',
        image: "https://via.placeholder.com/800x600"
    },
    {
        date: '2022',
        title: 'Game Development',
        description: 'I have explored the realm of game development during my spare time, delving into various programming languages like C#, C++, and Lua. My journey led me to work with popular game engines such as Unity, Unreal Engine, and Roblox Studio. A strong passion for creating immersive gaming experiences motivated me to develop prototypes in genres including Horror, Souls-like combat, Action RPG, RTS, Tower defense, and Puzzle games.\n\nThe initial phase involved mastering the fundamentals of 3D game development using Unity, utilizing resources like Gamedev.tv. Subsequently, I ventured into the world of Roblox for a period of experimentation and enjoyment. Finally, I concluded my exploration with Unreal Engine, focusing on developing procedural generated dungeon and combat systems. Moving forward, I am dedicated to using Unreal Engine to create a FPS souls-like dungeon game.',
        image: "https://via.placeholder.com/800x600"
    },

    {
        date: '2021',
        title: 'First taste of Web Development',
        description: 'With a deep-rooted desire to bring my creative ideas to life, I embarked on a journey to become a web developer, marking my initial foray into the vast field of software engineering. Through self-learning and dedication, I acquired proficiency in HTML, CSS, and JavaScript, honing my skills through online platforms like Udemy and ZeroToMastery.io.\n\nExpanding my expertise, I delved into the realm of API integration, harnessing external data sources and leveraging open-source projects. This immersive experience allowed me to both contribute to existing projects and develop my own portfolio website, showcasing my acquired knowledge and skills. You can explore my portfolio here.',
        image: "https://via.placeholder.com/800x600"
    },
    {
        date: '2019',
        title: 'High school diploma graduate',
        description: 'Graduated: 2019\nAttended: 2015\n\nSchroeder Scholarship Recipient\n\nAmong the select few, I was honored to be one of the six students chosen for the esteemed Schroeder Scholarship. This prestigious recognition celebrates academic excellence, highlighted by consistent high honors and a commitment to outstanding achievements. As a testament to these accomplishments, bursaries were awarded as semester rewards throughout grades 11 and 12, underscoring a dedication to excellence and a drive for continuous growth.\n\nThe culmination of these achievements led to the highly coveted full scholarship, opening doors to pursue a university degree at the renowned University of Manitoba. This scholarship not only acknowledges exceptional accomplishments but also provides invaluable support and opportunities for further academic development.\n\nBeing among the chosen recipients is a testament to the impact and significance of these accolades, underscoring the dedication and hard work that contributed to this remarkable achievement.',
        image: "https://via.placeholder.com/800x600"
    },
    {
        date: '2015',
        title: 'Education in the Philippines',
        description: 'Education: Grade 8\n\nDuring my formative years in the Philippines at La Naval Academy, from childhood until the age of 14 in 2015, I experienced a comprehensive academic environment that fostered my intellectual growth. One standout memory from those years is my engagement with advanced mathematical concepts in grade 8. Exploring topics like the Slope Interval formula prepared me for the challenges of pre-calculus and sparked a lifelong curiosity.\n\nIn pursuit of further educational opportunities and an improved quality of life, my family and I made the decision to immigrate to Canada. This transition marked a significant turning point in my academic journey, opening up new horizons and possibilities for personal and educational growth.\n\nMy time at La Naval Academy provided me with a solid foundation and equipped me with the necessary skills for my academic and professional journey. The dedicated efforts of educators and the stimulating environment nurtured a deep appreciation for learning and set the stage for future successes.',
        image: "https://via.placeholder.com/800x600"
    }
];
const Education = () => {
    return (
        <div>
            <h1>Work Experience</h1>
            <VerticalTimeline>
                {timelineData.map((item, index) => (
                    <div className="row" key={index}>
                        <VerticalTimelineElement
                            date={item.date}
                            contentStyle={{
                                background: 'var(--color-background)',
                                color: 'var(--color-text)',
                                border: '1px solid var(--color-accent)'
                            }}
                            iconStyle={{ background: 'var(--color-primary)', color: 'var(--color-text)' }}
                            icon={<i className="fas fa-briefcase"></i>}
                            position={index % 2 === 0 ? 'left' : 'right'} // Alternate position based on index
                            className='elementImage'
                        >
                            <img src={item.image} alt="work" style={{ width: "100%", height: '300px' }} />

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            style={{ top: '-350px' }} // Adjust the top position as desired
                            contentStyle={{ background: 'var(--color-background)', color: 'var(--color-text)' }}
                            contentArrowStyle={{ display: 'none' }}
                            iconStyle={{ display: 'none' }} // Add this line to hide the icon
                            position={index % 2 === 0 ? 'right' : 'left'} // Alternate position based on index
                            className='elementContent'
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            {item.description.split('\n').map((line, index) => {
                                if (line.startsWith('- ')) {
                                    return <li key={index}>{line.slice(2)}</li>;
                                } else {
                                    return <p key={index}>{line}</p>;
                                }
                            })}
                        </VerticalTimelineElement>
                    </div>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Education;
