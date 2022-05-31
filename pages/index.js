import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avo from '/public/icons/avo.svg';
import Icons from '@components/Icons/Icons';
import Link from 'next/link';
import styled from 'styled-components';
import like from '/public/icons/favorite.svg';

const Avos = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;
const Avo = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    box-shadow: 0px 0px 5px 6px rgba(0, 0, 0, 0.14);
    border-radius: 16px;
    min-width: 280px;
    padding: 24px;
    transition: all 0.4s ease-in;
    margin-top: 20px;
    row-gap: 8px;
    & figure,
    & figure img {
        width: 200px;
        justify-self: center;
    }
    &:hover {
        transform: translateY(-16px);
        transition: all 0.2s ease-in;
        cursor: pointer;
    }
`;

const Text = styled.p`
    color: #000000;
    font-size: 16px;
`;
const TextLg = styled(Text)`
    font-size: 24px;
    font-weight: bold;
`;
const SpaceBetween = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Home = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/avo',
        }).then(({ data }) => {
            setProductList(data.data);
        });
    }, []);
    console.log(productList);

    return (
        <div>
            <h1>
                Platzi <Icons imgProp={avo.src} dimensions="56px" /> Avo
            </h1>
            <Link href="/yes-or-no">
                <a className="yes-a">
                    <section className="yes_or_no">
                        <p>¿Deberia comer un Avo hoy?</p>
                    </section>
                </a>
            </Link>
            <Avos>
                {productList.map((avo) => (
                    <Link href={`/product/${avo.id}`} key={avo.name + avo.sku}>
                        <a>
                            <Avo>
                                <figure>
                                    <img src={avo.image} alt="" />
                                </figure>
                                <figure className="like">
                                    <img src={like.src} alt="" />
                                </figure>
                                <TextLg>{avo.name}</TextLg>
                                <SpaceBetween>
                                    <Text>{avo.price}</Text>
                                    <div>
                                        <TextLg>+</TextLg>
                                    </div>
                                </SpaceBetween>
                            </Avo>
                        </a>
                    </Link>
                ))}
            </Avos>
            <style jsx>
                {`
                    h1 {
                        margin: 40px 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    a {
                        text-decoration: none;
                    }
                    .yes_or_no {
                        display: flex;
                        justify-content: center;
                    }
                    .yes-a {
                        color: #4183c4;
                        margin-bottom: 16px;
                        display: block;
                    }
                    .like {
                        width: 100%;
                    }
                    .like img {
                        width: 24px;
                        height: 24px;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
