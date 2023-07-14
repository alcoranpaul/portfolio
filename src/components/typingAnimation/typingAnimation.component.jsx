/*
 * File: typingAnimation.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 20th June 2023 8:35:06 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 9:44:45 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { useState, useEffect } from 'react';
import Observer from '../../utils/observers/observer.js';
import { StyledParagraph, StyledSpan } from './typingAnimaiton.styles.jsx';

export const typingObserver = new Observer();


const TypingAnimation = ({ value, className }) => {

  const [typedText, setTypedText] = useState('');
  const sentenceToBeTyped = `  ${value}`;
  const [showVerticalCursor, setShowVerticalCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let typingTimeout;

    const startTyping = () => {
      typingTimeout = setTimeout(() => {
        if (currentIndex === sentenceToBeTyped.length - 1) {
          setShowVerticalCursor(false); // Set showCursor to false when typing is completed
          clearTimeout(typingTimeout);
          typingObserver.notify(); // Notify subscribers that typing is completed
          return;
        }
        setTypedText((prevText) => prevText + sentenceToBeTyped[currentIndex]);
        currentIndex = currentIndex + 1;
        startTyping();
      }, 40); // Adjust the typing speed (milliseconds) here (e.g., 100ms for 0.1 second delay between characters).
    };

    const startDelay = setTimeout(() => {
      startTyping();
    }, 2000); // 1-second start delay

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(startDelay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const splitTextByTags = (text) => {
    const regex = /<b>(.*?)<\/b>/g; // Regex pattern to match text wrapped between <b> tags
    const splitText = text.split(regex);
    return splitText.map((segment, index) => {
      if (index % 2 === 1) {
        // Text between <b> tags
        return (
          <StyledSpan

            className="bolded"
            key={index}

            whileHover={{ fontSize: "35px", transition: { duration: 0.2 } }}
          >
            {segment}
          </StyledSpan>
        )
      } else {
        // Normal text
        return segment;
      }
    });
  };

  return (
    <StyledParagraph className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} $showVerticalCursor={showVerticalCursor}>
      {splitTextByTags(typedText)}
    </StyledParagraph>
  );
};

export default TypingAnimation;