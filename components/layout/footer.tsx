import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faLinkedin,
    faBehanceSquare,
    faInstagramSquare,
    faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className='bg-secondary text-white p-4'>
            <Container>
                <Row>
                    <Col>DWS</Col>
                    <Col>
                        <h6>Social Media and Links</h6>
                        <a
                            href='https://www.facebook.com/dawin.widjaja/'
                            className='text-white'
                        >
                            <FontAwesomeIcon
                                icon={faFacebookSquare}
                                width={24}
                                className='mr-2'
                            />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/dawin-widjaja/'
                            className='text-white'
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                width={24}
                                className='mr-2'
                            />
                        </a>
                        <a
                            href='https://www.behance.net/dawin92'
                            className='text-white'
                        >
                            <FontAwesomeIcon
                                icon={faBehanceSquare}
                                width={24}
                                className='mr-2'
                            />
                        </a>
                        <a
                            href='https://www.instagram.com/dawinwidjaja/'
                            className='text-white'
                        >
                            <FontAwesomeIcon
                                icon={faInstagramSquare}
                                width={24}
                                className='mr-2'
                            />
                        </a>
                        <a
                            href='https://www.youtube.com/channel/UCuFnNlvYZA1i9WI-LQ_wpjA'
                            className='text-white'
                        >
                            <FontAwesomeIcon
                                icon={faYoutubeSquare}
                                width={24}
                                className='mr-2'
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
