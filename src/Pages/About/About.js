import React from 'react';
import './About.css';
import me from '../../../src/images/about.jpg'
import { Card } from 'react-bootstrap';
const About = () => {
    return (
        <div className='container mt-5'>
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={me} />
                <Card.Body>
                    <Card.Title>Name: Rakibul Hasan</Card.Title>
                    <Card.Text>
                    My goal is to be a web developer.Having 4 month experience in web developing sector. Have also the experience on problem solving in various platform. I have created different types of projects(websites) with responsive design. Also knew the concept of OOP, Algorithm and Data structure. I, as a web developer have knowledge on Html, CSS, Bootstrap, tailwind, JavaScript, ReactJs,firebase.   
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default About;