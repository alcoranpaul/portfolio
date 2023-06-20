/*
 * File: work.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 15th June 2023 9:36:14 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Work = () => {
    const workData = [
        {
            title: 'Project 1',
            imageSrc: 'https://via.placeholder.com/1280x720',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ',
            technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Something'],
            date: 'January 2022',
        },
        {
            title: 'Project 2',
            imageSrc: 'https://via.placeholder.com/800x600',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['Angular', 'TypeScript', 'SCSS'],
            date: 'January 2022',
        },
        {
            title: 'Project 3',
            imageSrc: 'https://via.placeholder.com/800x600',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['Vue', 'JavaScript', 'Tailwind CSS'],
            date: 'January 2022',
        },
    ];

    return (
        <Container className="developerWork" fluid style={{
            width: '80%',
        }}>
            {workData.map((work, index) => (
                <Card key={index} style={{
                    margin: '1rem auto',
                    overflow: 'hidden',
                    background: 'var(--color-workCard)',
                    color: 'var(--color-text)',
                    borderLeft: '5px double var(--color-accent)',
                    boxShadow: '0 0 2px 0 var(--color-accent)',
                }}>
                    <Card.Body>
                        <Row>
                            <Col xs={12} md={5} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: "80%"
                            }}>
                                <div style={{ flex: '1 0 auto' }}>
                                    <Card.Img
                                        variant="top"
                                        src={work.imageSrc}
                                        style={{
                                            width: '100%',


                                            // border: '10px double var(--color-accent)',
                                        }}
                                    />
                                </div>
                                <Card.Text style={{ paddingTop: "10px" }}>
                                    <p>{work.technologies.join(', ')}</p>
                                    <i> <p>{work.date}</p></i>
                                </Card.Text>

                            </Col>
                            <Col xs={12} md={7}>
                                <Card.Title><h4>{work.title}</h4></Card.Title>
                                <Card.Text>{work.description}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>



    );
};

export default Work;



//For ScrollTo

// import './styles.css';

// const WorkExperiencePage = () => {
//   const handleScrollToWork = () => {
//     document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleScrollToOtherWork = () => {
//     document.getElementById('other-work').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="page">
//       <section id="work" className="section">
//         <h2>Work</h2>
//         {/* Add work experience content here */}
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </section>

//       <section id="other-work" className="section">
//         <h2>Other Work</h2>
//         {/* Add content for other work here */}
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </section>

//       <div className="scroll-buttons">
//         <button onClick={handleScrollToWork}>Scroll to Work</button>
//         <button onClick={handleScrollToOtherWork}>Scroll to Other Work</button>
//       </div>
//     </div>
//   );
// };

// export default WorkExperiencePage;