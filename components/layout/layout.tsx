import React from 'react';
import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = props => {
    return (
        <>
            <Head>
                <title>Dawin&apos;s Space</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main className='mt-5'>{props.children}</main>
            <Footer />
        </>
    );
};
