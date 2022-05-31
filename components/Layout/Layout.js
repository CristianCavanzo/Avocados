import { Header } from '@components/Header/Header';
import React from 'react';
const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            {children}
            <footer>THIS IS THE FOOTER</footer>
        </div>
    );
};

export default Layout;
