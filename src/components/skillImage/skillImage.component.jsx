/*
 * File: skillImage.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 4th July 2023 3:17:15 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 3:20:11 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

import { IconImage } from './skillImage.styles';
const SkillImage = ({ src, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src;
    }, [src]);

    return (
        <IconImage

            src={src} alt={alt}
        />
    )
}

export default SkillImage;