/*
 * File: icon.component.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 12:10:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 7:32:13 pm
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


    useEffect(() => {
        if (type === ICON_TYPES.popUp) {
            setTooltipContent(value);
        }
    }, []);


    const getIconColor = () => {
        if (iconColor.startsWith('linear-gradient')) {
            return { backgroundImage: isHovered ? iconColor : 'linear-gradient(135deg, black, transparent)' };
        }
        else {
            return { backgroundColor: isHovered ? iconColor : 'black' }
        }
    };

    const handleOnClick = () => {
        if (type === ICON_TYPES.popUp) {
            setTooltipVisible(!tooltipVisible);

            // Copy tooltip content to clipboard
            if (tooltipContent) {
                navigator.clipboard.writeText(tooltipContent)
                    .then(() => {
                        console.log('Tooltip content copied to clipboard');
                    })
                    .catch((error) => {
                        console.error('Failed to copy tooltip content:', error);
                    });
            }
        }
        else {
            window.open(value, '_blank');
        }
    };

    return (
        <IconContainer
            isHovered={isHovered}
            onClick={handleOnClick}
        >
            <IconBackground
                isHovered={isHovered}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={getIconColor()}
            >
                <Component tilt={tilt}>
                    <IconComponent fill={isHovered} />
                </Component>
                {(tooltipVisible) && (
                    <Tooltip text={tooltipContent} isVisible={tooltipVisible} >
                        <p>{tooltipContent}</p>
                    </Tooltip>
                )}
            </IconBackground>

        </IconContainer >
    );
};

export default Icon;
