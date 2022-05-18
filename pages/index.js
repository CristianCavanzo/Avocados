import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import axios from 'axios';

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

    return (
        <div>
            <Navbar />
            <h1>Hola Platzi</h1>
            {productList.map((avo) => (
                <div key={avo.name + avo.sku}>{avo.name}</div>
            ))}
        </div>
    );
};

export default Home;
