/*
 * File: verticalSlideText.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 20th June 2023 8:48:49 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 20th June 2023 9:53:00 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import React, { useState, useEffect } from 'react';

const VerticalSlideText = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) =>
                (prevIndex + 1) % words.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">
            <h1 className="slide-up-text">{words[currentWordIndex]}</h1>
        </div>
    );
};

export default VerticalSlideText;
