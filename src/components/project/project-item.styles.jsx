/*
 * File: project.styes.scss
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:33 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 10:20:25 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';


export const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: ${({ clicked }) => (clicked ? '10%' : '-5%')};
    opacity: ${({ clicked }) => (clicked ? '1' : '0')};
    transform: ${({ clicked }) => (clicked ? 'translateY(0)' : 'translateY(100%)')};
    transition: opacity 1s ease, transform 0.5s ease-in-out, bottom 0.6s ease-in-out; /* Transition effect for the Button */
`;


export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ imageurl }) => `url(${imageurl})`};
    background-position: center;
    background-size: cover;
    filter: brightness(40%); /* Adjust the brightness to darken the image */
    transition: filter 0.3s ease; /* Add a smooth transition effect for the filter */
`;

export const ContentContainer = styled.div`
    padding-top: 10px;
    padding-left: 10px;
    flex: 1;
    position: relative;
    z-index: 1;

    transition: transform 1s ease, font-size 0.3s ease;
    

`
export const ProjectItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: 85vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  
    ${({ clicked }) => clicked ?
        `
        ${ContentContainer} {
            transform: translateX(5%); /* Translate 10% towards the right side when hovered */
            font-size: 1.2em; /* Increase the font size when hovered */
            transition: transform 1s ease, font-size 0.3s ease;
        }
        ${BackgroundImage} {
            filter: none;
        }
        
    `:
        ` &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.3s ease;
        opacity: 0;
        z-index: 1; /* Overlay on top of the background image */
        }
  
        &:hover:before {
            opacity: 1;
        }
    
        &:hover ${BackgroundImage} {
            filter: none;
        }
    
        &:hover ${ContentContainer} {
            transform: translateX(5%); /* Translate 10% towards the right side when hovered */
            font-size: 1.2em; /* Increase the font size when hovered */
            transition: transform 1s ease, font-size 0.3s ease;
        }
    `}
   

`
