/*
 * File: icon.component.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 12:10:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 10:19:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { useState, useEffect } from 'react';
import { IconContainer, IconBackground, Component } from './icon.styles';
import { ICON_TYPES } from '../../data/components/contact/linksTo';
import Tooltip from '../tooltip/tooltip.component';

const Icon = ({ IconComponent, iconColor, payload: { type, value } }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');
    const [iconCoordinates, setIconCoordinates] = useState({ x: 0, y: 0 });


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
        setTooltipVisible(false);
    };

    useEffect(() => {
        if (type === ICON_TYPES.popUp) {
            setTooltipContent(value);
        }
        // eslint-disable-next-line
    }, []);

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
        } else {
            return { backgroundColor: isHovered ? iconColor : 'black' };
        }
    };

    const handleOnClick = (event) => {
        if (type === ICON_TYPES.popUp) {
            setIconCoordinates({ x: event.clientX, y: event.clientY });
            setTooltipVisible(!tooltipVisible);

            if (tooltipContent) {
                navigator.clipboard
                    .writeText(tooltipContent)
                    .then(() => {
                        console.log('Tooltip content copied to clipboard');
                    })
                    .catch((error) => {
                        console.error('Failed to copy tooltip content:', error);
                    });
            }
        } else {
            window.open(value, '_blank');
        }
    };

    return (
        <IconContainer isHovered={isHovered} onClick={handleOnClick}>
            <IconBackground
                isHovered={isHovered}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={getIconColor()}
            >
                <Component tilt={tilt}>
                    <IconComponent fill={isHovered} />
                </Component>
                {tooltipVisible && (
                    <Tooltip text={tooltipContent} isVisible={tooltipVisible} coordinates={iconCoordinates} />
                )}
            </IconBackground>
        </IconContainer>
    );
};

export default Icon;
