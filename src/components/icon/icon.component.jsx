/*
 * File: icon.component.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 12:10:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 5:54:19 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import React, { useState, useEffect } from 'react';

const Icon = ({ IconComponent, iconColor }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState(0);
    const [tiltCount, setTiltCount] = useState(0);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setTilt(90);
        setTiltCount(0);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt(0);
        setTiltCount(0);
    };

    useEffect(() => {
        let timeout;

        if (tiltCount < 2) {
            timeout = setTimeout(() => {
                setTilt(-tilt);
                setTiltCount(tiltCount + 1);
            }, 100);
        } else if (tiltCount === 2) {
            timeout = setTimeout(() => {
                setTilt(0.01);
                setTiltCount(tiltCount + 1);
            }, 50);
        }

        return () => clearTimeout(timeout);
    }, [tilt, tiltCount]);


    const getIconColor = () => {
        if (iconColor.startsWith('linear-gradient')) {
            return { backgroundImage: isHovered ? iconColor : 'linear-gradient(135deg, black, transparent)' };
        }
        else {
            return { backgroundColor: isHovered ? iconColor : 'black' }
        }
    };

    return (
        <div className='icon-container'
            style={{
                width: isHovered ? '85px' : '75px',
                height: isHovered ? '85px' : '75px',
                border: '2px solid white',
                borderRadius: '50%',
                display: 'flex',

                alignItems: 'center',
                justifyContent: 'center',
                transition:
                    'width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease',

                margin: '0 20px 0 20px',

            }}>
            <div
                className="icon-background"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: isHovered ? '75px' : '100%',
                    height: isHovered ? '75px' : '100%',

                    borderRadius: '50%',

                    justifyContent: 'center',
                    alignItems: 'center',

                    transition:
                        'width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease',

                    ...getIconColor(),
                }}
            >
                <div
                    className='icon'
                    style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.5s ease',
                        transform: `rotate(${tilt}deg)`,

                    }}
                >
                    <IconComponent
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                        }}
                        fill={isHovered}
                    />
                </div>
            </div>
        </div>

    );
};

export default Icon;
