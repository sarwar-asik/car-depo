import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData()
console.log(products);
    return (
        <div>
            <h1>  Our Products</h1>

        </div>
    );
};

export default Products;