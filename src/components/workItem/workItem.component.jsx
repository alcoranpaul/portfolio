/*
 * File: workItem.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 4th July 2023 1:45:51 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 1:54:12 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import { Card, Row, Col } from 'react-bootstrap';

const WorkItem = ({ title, imgURL, role, description, date, blurHash, tech }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.src = imgURL;
    }, [imgURL]);

    return (
        <Card
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
                            {!imageLoaded && (
                                <Blurhash
                                    hash={blurHash}
                                    width={'100%'}
                                    height={'100%'}
                                    resolutionX={32}
                                    resolutionY={32}
                                    punch={1}
                                />)}

                            {imageLoaded && (<Card.Img
                                alt={'image for ' + title}
                                src={imgURL}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(90%)'
                                }}
                            />)}
                        </div>
                        <Card.Text style={{ paddingTop: '10px' }}>
                            {
                                tech && (
                                    <span className="work-tech"
                                        style={{
                                            color: 'var(--color-accent)'
                                        }}
                                    >{tech.join(' || ')}</span>
                                )
                            }
                            <br />
                            <span className="work-date">{date}</span>
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
                            <h4 className="work-title">{title}</h4>
                            <span
                                className="work-role"
                                style={{
                                    fontSize: '14px',
                                    padding: '5px',
                                    textAlign: 'center',
                                }}
                            >
                                {role}
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
                            {description}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default WorkItem;