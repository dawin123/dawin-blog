import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = props => {
    return (
        <>
            <Header />
            <main className='mt-5'>{props.children}</main>
            <Footer />
        </>
    );
};
