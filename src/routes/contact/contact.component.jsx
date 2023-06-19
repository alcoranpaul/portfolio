/*
 * File: contact.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 3:56:42 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import Platforms from "../../components/platforms/platforms.component";
import styled from 'styled-components';
import SimpleMap from "../../data/components/googleMap/googleMap.component";

const Contact = () => {
    return (
        <Container>
            <MapAndEmailContainer>
                <Box1>
                    <SimpleMap />
                </Box1>
                <Box2 />
            </MapAndEmailContainer>
            <PlatformContainer>
                <Platforms />
            </PlatformContainer>
        </Container>
    );
}

export default Contact;

const Container = styled.div`

    flex-direction: column;
    align-items: center;
`;

const MapAndEmailContainer = styled.div`
    width: 100%;
    height: 600px;
    background-color: var(--color-primary);
    margin: 20px 0px;
    padding: 20px;
    display: flex;
`;

const Box1 = styled.div`
    width: 75%;
    height: 100%;
    background-color: #f0f0f0;
`;

const Box2 = styled.div`
    width: 25%;
    height: 100%;
    background-color: #c0c0c0;
`;

const PlatformContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;
