import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import TestRejim from '../components/TestRejim';

const Layout = ({ children }) => {
    return (
        <>
        <TestRejim />
            <Headers />
            <div>
                {children}

            </div>
            <Footer />
        </>
    )
}

export default Layout;