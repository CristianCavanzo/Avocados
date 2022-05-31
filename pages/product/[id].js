import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ProductSummary } from '@components/Product';
const ProductItem = () => {
    const [item, setItem] = React.useState();
    const {
        query: { id },
    } = useRouter();
    React.useEffect(() => {
        axios({
            method: 'GET',
            url: `/api/avo/${id}`,
        }).then(({ data: { avo } }) => setItem(avo));
    }, []);

    return (
        <ProductSummary
            image={item.image}
            name={item.name}
            price={item.price}
            sku={item.sku}
        />
    );
};

export default ProductItem;
