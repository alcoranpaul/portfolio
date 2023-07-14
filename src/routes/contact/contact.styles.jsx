/*
 * File: contact.styles.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 2:50:25 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 10:17:38 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Container = styled.div`
    
    flex-direction: column;
    align-items: center;
`;

export const MapAndEmailContainer = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    margin: 20px 0px;
    padding: 20px;

    @media (min-width: 1280px) {
        height: 650px;
    }
    @media (min-width: 1840px) {
        height: 600px;
    }
`;

export const Box1 = styled.div`
    width: 75%;
    height: 100%;
    padding: 10px;
    margin-right: 10px;
    border: 2px double var(--color-text);
`;

export const Box2 = styled.div`
  width: 25%;
  height: 100%;
  padding: 10px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  border: 2px double var(--color-contact);
  background-color: var(--color-contact);
  
  .opening-text {
    margin-bottom: 5px;

    span{
        font-size: 30px;
        font-weight: 600;
    }
  }
  
  .email-container{
    width: 100%;

    .email {
        font-size: 16px;
        transition: opacity 0.5s ease;
        strong {
        font-size: 17px;
        
        letter-spacing: 2px;
        }
    }

  }
  
`;

export const PlatformContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    
`;


export const EmailButton = styled(Button)`
    margin-top: 5px;
    width: 100%;
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    transition: background-color 0.5s ease, border 0.5s ease;

    &:hover{
        background-color: var(--color-buttonHover);
        border: 2px solid var(--color-text);
    }   

`

export const ResumeButton = styled(EmailButton)` 
    color: var(--color-background);
    background-color: var(--color-text);
    border: 2px solid var(--color-background);

    &:hover {
        background-color: var(--color-buttonHover);
        border: 2px solid var(--color-background);
    }
`