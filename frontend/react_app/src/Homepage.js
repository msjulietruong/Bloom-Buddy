import React from 'react';
import { Container, Card } from 'react-bootstrap';
import logo from './bloom-buddy.svg';

const Homepage = () => {
    // TODO: Hardcoded list of plants, replace this with plants for each user
    const plants = ['Sunflower', 'Cactus'];

    return (
        <Container fluid className="mt-5">
            <img src={logo} alt="Logo" style={{ width: '150px', position: 'absolute', top: '10px', left: '10px' }} />
            <Container style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center">My Plants</Card.Title>
                        <ul>
                            {plants.map((plant, index) => (
                                <li key={index}>{plant}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
};

export default Homepage;