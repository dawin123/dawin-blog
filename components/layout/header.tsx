import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export const Header = () => {
    return (
        <Navbar bg='light' expand='lg' sticky='top'>
            <Navbar.Brand href='#home'>DWS</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Link href='/' as={`/`} passHref>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Link>
                    <Link href='/blog' as={'/blog'} passHref>
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
