/*
 * File: typingAnimation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 20th June 2023 8:35:06 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 20th June 2023 8:40:43 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useState, useEffect } from 'react';

const TypingAnimation = ({ value, className }) => {
    const [typedText, setTypedText] = useState('');
    const sentenceTobeTyped = `  ${value}`;

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            setTypedText((prevText) => { // Update the typedText state using the previous text.
                if (currentIndex === sentenceTobeTyped.length - 1) { // Check if we have reached the last character of the sentence.
                    clearInterval(typingInterval); // If so, clear the interval to stop the typing animation.
                }
                return prevText + sentenceTobeTyped[currentIndex]; // Append the current character to the typedText state.
            });
            currentIndex = currentIndex + 1; // Move to the next character in the sentence.
        }, 50); // Adjust the typing speed (milliseconds) here (e.g., 100ms for 0.1 second delay between characters).
        return () => clearInterval(typingInterval); // Clean up function that clears the interval when the component is unmounted or re-rendered.
    }, []);

    return (
        <p className={className}>{typedText}</p>

    );
};

export default TypingAnimation;