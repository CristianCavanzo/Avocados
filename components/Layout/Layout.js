import { Header } from '@components/Header/Header';
import { Navbar } from '@components/Navbar/Navbar';
import React from 'react';
const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <Navbar />
            {children}
            <footer>THIS IS THE FOOTER</footer>
        </div>
    );
};

export default Layout;
