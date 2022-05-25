import Icons from '@components/Icons/Icons';
import React from 'react';
import cart from '/public/icons/cart.svg';
import avo from '/public/icons/avo.svg';

const Header = () => {
    return (
        <header>
            <section>
                <Icons imgProp={avo.src} dimensions="40px" />
            </section>
            <section>
                <Icons imgProp={cart.src} altProp={'Account icon'} />
                <p>Casansta (0)</p>
            </section>
        </header>
    );
};

export { Header };
