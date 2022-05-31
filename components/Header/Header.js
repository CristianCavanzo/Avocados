import Icons from '@components/Icons/Icons';
import React from 'react';
import cart from '/public/icons/canasta.svg';
import avo from '/public/icons/avo.svg';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const HeaderComponent = styled.header`
    justify-content: space-between;
    display: flex;
    margin: 0 -24px;
    padding: 16px 24px;
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    & .here {
        margin: -16px 0;
        padding: 8px;
        background: rgba(0, 0, 0, 0.05);
    }
`;

const Sections = styled.section`
    display: flex;
    align-items: center;
    column-gap: 8px;
    cursor: pointer;
`;

const Header = () => {
    let { asPath } = useRouter();
    console.log(asPath === '/');
    return (
        <HeaderComponent>
            <Sections className={`${asPath === '/' && 'here'}`}>
                <Icons imgProp={avo.src} dimensions="32px" />
                <p>Avo Store</p>
            </Sections>
            <Sections>
                <Icons
                    imgProp={cart.src}
                    altProp={'Account icon'}
                    dimensions="32px"
                />
                <p>Casansta (0)</p>
            </Sections>
        </HeaderComponent>
    );
};

export { Header };
