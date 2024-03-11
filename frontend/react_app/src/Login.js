import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import logo from './bloom-buddy.svg';
import './login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // TODO: Add authentication here, hardcode for now
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <Container fluid className="mt-5">
            <div className="text-center mb-3">
                <img src={logo} alt="Logo" style={{ width: '150px' }} />
            </div>
            <Container style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <h4 className="text-center">Login</h4>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={handleLogin} block className="w-100 custom-button" style={{ marginTop: '25px' }} >
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
};

export default LoginPage;
