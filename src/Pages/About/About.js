import React from 'react';
import './About.css';
import me from '../../../src/images/about.jpg'
import { Card } from 'react-bootstrap';
const About = () => {
    return (
        <div className='container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Body>
                    <Card.Title>Name: Rakibul Hasan</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default About;