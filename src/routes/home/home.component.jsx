/*
 * File: home.component.jsx
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 5:24:13 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 9th June 2023 1:33:53 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { Container, Row, Col } from 'react-bootstrap';
import './home.styles.scss';

const Home = () => {
    return (
        <div className='def'>
            <h1>Home</h1>
            <Container fluid>
                <Row className="full-height">
                    <Col className="cell" style={{ backgroundColor: 'red' }}>
                        <div className="box"></div>
                        Cell 1
                    </Col>
                    <Col className="cell" style={{ backgroundColor: 'green' }}>
                        <div className="box"></div>
                        Cell 2
                    </Col>
                </Row>
                <Row className="full-height">
                    <Col className="cell" style={{ backgroundColor: 'yellow' }}>
                        <div className="box"></div>
                        Cell 4
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
