import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const listItems = [
    "Liaison with Government",
    "Local manpower",
    "Technical know-how",
    "On site support",
    "Technical assistance",
    "Project Coordination",
    "Project Implementation",
]
function WhoWeAre() {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <h1>Who We Are</h1>
                </Col>
                <Col lg={8}>
                    <p>Mercury works with highly leading qualified partners to provide turn key engineering solutions mainly in Power, Steel, Oil & Gas and other sectors. Our custom designed solutions focus on Technical Audit, Overhauling, Rehabilitation, Modernization, Manufacturing, Supply, Installation, Commissioning and Expansion of old existing plants</p>
                    <ul>
                        {listItems.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default WhoWeAre