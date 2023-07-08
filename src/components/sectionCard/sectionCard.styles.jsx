/*
 * File: sectionCard.styles.jsx
 * Project: portfolio
 * File Created: Tuesday, 20th June 2023 3:23:40 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 8:06:44 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-accent);
  width: 80%;
  margin: 0 auto;
  overflow: hidden;

  
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 10px;
  padding: 20px 10px 10px 10px;
  width: 50%;
  text-align: center;
`;

export const Body = styled.div`
  font-size: 25px;
  line-height: 1.9;
  letter-spacing: 1px;
  color: var(--color-accent);
  text-align: left;
  margin-bottom: 10px;
  width: 80%;

  .bolded {
    font-weight: bold;
    font-size: 30px;
    color: var(--color-text);
  }

  .linkTo {
    color: var(--color-text);
    text-decoration: underscore;
    font-weight: bold;
    font-size: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--color-linkHover);
    }
  }
`;