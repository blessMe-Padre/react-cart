import React from 'react';
import { useState } from "react";
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';
import data from '../../data';


export default function Cart() {
    const [cart, setCart] = useState(data);

    // удаление продукта
    const removeProduct = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.id)
        )
    }

    const products = cart.map((product) => {
        return <Product
            product={product}
            key={product.id}
            removeProduct={removeProduct}
        />;
    });

    return (
        <>
            <CartHeader />
            {products}
            <CartFooter />
        </>

    )
}
