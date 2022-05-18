import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </menu>
            <menu>
                <a href="/">Home2</a>
                <a href="/about">about2</a>
            </menu>
        </nav>
    );
};

export { Navbar };
