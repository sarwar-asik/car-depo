import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductsDetails = () => {
    const {state} = useLocation()
    const { name,img, descriptions, location,price, mobile,time, posted,used, seller,
      } = state;

    return (
        <div>
            <h1 className='text-center text-slate-500 font-bold text-3xl'> Details Of Products {name}</h1>
            
        </div>
    );
};

export default ProductsDetails;