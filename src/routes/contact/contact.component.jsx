/*
 * File: contact.component.jsx
 * Project: portfolio
 * File Created: Wednesday, 31st May 2023 5:41:58 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 5:35:40 pm
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
                <Box2>
                    <div className="opening-text">
                        <span>Reach out today and let's start a conversation!</span>
                        <p>Stay connected and engaged with me on various social media platforms. Connect with me on the following popular social media apps below to explore my world as a developer. </p>
                        <p>Let's connect, share experiences, and stay updated together. Your support and interaction mean a lot to me as I continue to grow and evolve in my journey. Feel free to reach out and connect with me today!</p>
                    </div>
                    <div className="location">
                        <p>Based on Winnipeg, MB</p>
                    </div>
                    <div className="email-container">
                        <div className="email">
                            <strong>EMAIL:</strong> paulreyes74@yahoo.com
                        </div>
                        <div className="btn btn-primary">Send me an Email</div>
                    </div>
                </Box2>
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
    ${'' /* background-color: var(--color-primary); */}
    margin: 20px 0px;
    padding: 20px;
    display: flex;
`;

const Box1 = styled.div`
    width: 75%;
    height: 100%;
    padding: 10px;
    margin-right: 10px;
    border: 2px double var(--color-text);
`;

const Box2 = styled.div`
  width: 25%;
  height: 100%;
  padding: 10px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  border: 2px double var(--color-contact);
  background-color: var(--color-contact);
  
  .opening-text {
    margin-bottom: 20px;

    span{
        font-size: 30px;
        font-weight: 600;
    }
  }
  
  .email-container{
    width: 100%;
    padding-top: 30px;
    .btn{
        margin-top: 20px;
        width: 100%;
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);

        &:hover{
            background-color: var(--color-buttonHover);
            border: 2px solid var(--color-text);
        }
    }
  }
  .email {
    font-size: 16px;
    
    strong {
      font-size: 18px;
      
      letter-spacing: 2px;
    }
  }
`;

const PlatformContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;
