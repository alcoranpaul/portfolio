/*
 * File: workItem.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 4th July 2023 1:45:51 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 6:46:17 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
    WorkItemContainer, LeftContainer,
    ImageContainer,
    TechContainer,
    RightContainer
} from './workItem.styles';

const WorkItem = ({ title, imgURL, role, description, date, blurHash, tech }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const workID = title.match(/[A-Z]/g)?.join('');

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
                            <Link className='work-full-page-btn' to={workID}>View Full Page</Link>
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