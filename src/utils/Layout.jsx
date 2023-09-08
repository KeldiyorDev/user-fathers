import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Headers />
            <div>
                {children}

            </div>
            <Footer />
        </>
    )
}

export default Layout;