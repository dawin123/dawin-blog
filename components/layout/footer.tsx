import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Footer = () => {
    return (
        <div className='bg-secondary text-white p-4'>
            <Container>
                <Row>
                    <Col>Brand name</Col>
                    <Col>Useful links</Col>
                    <Col>Social media</Col>
                </Row>
            </Container>
        </div>
    );
};
