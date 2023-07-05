/*
 * File: workItem.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 4th July 2023 1:45:51 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 4:54:30 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import { Card, Row, Col } from 'react-bootstrap';

import {
    WorkItemContainer, LeftContainer,
    ImageContainer,
    TechContainer,
    RightContainer
} from './workItem.styles';

const WorkItem = ({ title, imgURL, role, description, date, blurHash, tech }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.src = imgURL;
    }, [imgURL]);

    return (
        <WorkItemContainer>
            <Card.Body>
                <Row>
                    <LeftContainer xs={12} md={5}>
                        <ImageContainer>
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
                        </ImageContainer>
                        <TechContainer>
                            {
                                tech && (
                                    <span className="work-tech"
                                        style={{
                                            color: 'var(--color-accent)'
                                        }}
                                    >{tech.join(' || ')}</span>
                                )
                            }
                            <span className="work-date">{date}</span>
                            <button className='work-full-page-btn'>View Full Page</button>
                        </TechContainer>
                    </LeftContainer>
                    <RightContainer xs={12} md={7}>
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
                                height: '90%',
                                padding: '10px',
                                borderRadius: '5px 10px 5px 10px',
                            }}
                        >
                            {description.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </Card.Text>
                    </RightContainer>
                </Row>
            </Card.Body>
        </WorkItemContainer>
    )
}

export default WorkItem;