import React from 'react';
import styled from 'styled-components';

const Product = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ProductSummary = ({ image, name, price, sku }) => {
    return (
        <React.Fragment>
            <Product>
                <figure>
                    <img src={image} alt="" />
                </figure>
                <article>
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <p>{sku}</p>
                    <div></div>
                    <input type="number" />
                    <button>
                        <i></i>Add to cart
                    </button>
                </article>
            </Product>
        </React.Fragment>
    );
};

export { ProductSummary };
