/*
 * File: workContent.component.jsx
 * Project: portfolio
 * File Created: Sunday, 2nd July 2023 10:40:15 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 3rd July 2023 6:46:38 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { Card, Row, Col, Container } from 'react-bootstrap';


const WorkContent = ({ works }) => {
    const worksKeys = Object.keys(works);
    const worksValues = Object.values(works);

    return (
        <Container className="developerWork" fluid style={{ width: '80%' }}>
            {worksValues.map((work, index) => (
                <Card
                    key={worksKeys[index]}
                    style={{
                        margin: '1rem auto',
                        overflow: 'hidden',
                        background: 'var(--color-workCard)',
                        color: 'var(--color-text)',
                        borderLeft: '5px double var(--color-accent)',
                        boxShadow: '0 0 2px 0 var(--color-accent)',
                    }}
                >
                    <Card.Body>
                        <Row>
                            <Col
                                xs={12}
                                md={5}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '80%',
                                }}
                            >
                                <div style={{ flex: '1 0 auto' }}>
                                    <Card.Img
                                        alt={work.title}
                                        src={work.imgURL}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            filter: 'brightness(90%)'
                                        }}
                                    />
                                </div>
                                <Card.Text style={{ paddingTop: '10px' }}>
                                    {
                                        work.tech && (
                                            <span className="work-tech"
                                                style={{
                                                    color: 'var(--color-accent)'
                                                }}
                                            >{work.tech.join(' || ')}</span>
                                        )
                                    }
                                    <br />
                                    <span className="work-date">{work.date}</span>
                                </Card.Text>
                            </Col>
                            <Col xs={12} md={7}>
                                <Card.Title
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'left',
                                        textAlign: 'left',
                                    }}
                                >
                                    <h4 className="work-title">{work.title}</h4>
                                    <span
                                        className="work-role"
                                        style={{
                                            fontSize: '14px',
                                            padding: '5px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {work.role}
                                    </span>
                                </Card.Title>
                                <Card.Text
                                    className="work-description"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        width: '100%',
                                        height: '85%',
                                        padding: '5px',
                                        borderRadius: '5px 10px 5px 10px',
                                    }}
                                >
                                    {work.description}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default WorkContent;
