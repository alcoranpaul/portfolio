/*
 * File: project.styes.scss
 * Project: portfolio
 * File Created: Monday, 12th June 2023 11:50:33 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 12th June 2023 1:02:41 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

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
export const ProjectItemContainer = styled.div`
 position: relative; /* Ensure proper positioning of the image and overlay */
  width: 100%;
  height: 85vh;
  overflow: hidden; /* Crop the background image to fit within the container */
  display: flex; /* Add this */
  flex-direction: column; /* Add this */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the transparency as desired */
    transition: opacity 0.3s ease; /* Add a smooth transition effect for the overlay */
    opacity: 0; /* Initially hide the overlay */
  }

  &:hover:before {
    opacity: 1; /* Show the overlay on hover */
  }

  &:hover ${BackgroundImage} {
    filter: none; /* Remove any filters on the image on hover to show the original image */
  }
  background-color: yellow;
`
