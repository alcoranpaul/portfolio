/*
 * File: project.styes.scss
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:33 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 5:22:43 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: ${({ clicked }) => (clicked ? '10%' : '-5%')};
    opacity: ${({ clicked }) => (clicked ? '1' : '0')};
    transform: ${({ clicked }) => (clicked ? 'translateY(0)' : 'translateY(100%)')};
    transition: opacity 1s ease, transform 0.5s ease-in-out, bottom 0.6s ease-in-out; /* Transition effect for the Button */
    
`;


export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ imageurl }) => `url(${imageurl})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 1280px 720px;
    z-index: -1;

    filter: brightness(30%); /* Adjust the brightness to darken the image */
    transition: filter 1s ease, transform 0.5s ease, background-size 1s ease; /* Add a smooth transition effect for the filter */
`;

export const ContentContainer = styled.div`

    padding-top: 10px;
    padding-left: 10px;
    flex: 1;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;

    transition: transform 1s ease, font-size 0.3s ease;

    .project-title{
        margin-bottom: 10px;
    }    

`
export const ProjectItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;


  
    ${({ clicked }) => clicked ?
        `
        ${ContentContainer} {
            transform: translateX(5%); /* Translate 10% towards the right side when hovered */
            font-size: 1.2em; /* Increase the font size when hovered */
            transition: transform 1s ease, font-size 0.3s ease;
          
            .project-description, .project-title{
                text-shadow: 2px 0 var(--color-background), 0 2px var(--color-background),0 0px var(--color-background), 2px 0 var(--color-background), 0 2px var(--color-background);
                background-color: rgba(0, 0, 0, 0.5);
                transition: text-shadow 0.5s ease, background-color 0.5s ease;
            }


           
        }
        ${BackgroundImage} {
            filter: brightness(90%);
            background-size: 1600px 900px;

        }
        
    `:
        ` &:before {
            position: absolute;
            top: 0;
            left: 0;
            
            transition: opacity 0.3s ease;
                opacity: 0;
                z-index: 1; /* Overlay on top of the background image */
            }
    
            &:hover:before {
                opacity: 1;
            }
        
            &:hover ${BackgroundImage} {
                filter: brightness(80%);
            }
        
            &:hover ${ContentContainer} {
                transform: translateX(5%); /* Translate 10% towards the right side when hovered */
                font-size: 1.2em; /* Increase the font size when hovered */
                text-shadow: 2px 0 var(--color-background), 0 2px var(--color-background),0 0px var(--color-background), 2px 0 var(--color-background), 0 2px var(--color-background);
                
                transition: transform 1s ease, font-size 0.3s ease, text-shadow 0.5s ease;
            }
        `
    } 
`
