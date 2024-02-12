'use client';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export const Header = () => {
    return (
        <Navbar bg='light' expand='lg' sticky='top'>
            <Navbar.Brand href='/'>DWS</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Link href='/' as={`/`} className='navbar-link'>
                        Home
                    </Link>
                    <Link href='/blog' as={'/blog'} className='navbar-link'>
                        Blog
                    </Link>
                    <Link
                        href='/project-svarga'
                        as={'/project-svarga'}
                        className='navbar-link'
                    >
                        Project Svarga
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
