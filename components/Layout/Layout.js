import { Navbar } from '@components/Navbar/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <footer>THIS IS THE FOOTER</footer>
            <style jsx>
                {`
                    .container {
                        background: salmon;
                    }
                `}
            </style>
        </div>
    );
};

export default Layout;
