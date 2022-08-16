import React from 'react';
import { useState, useEffect } from "react";
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';
import data from '../../data';


export default function Cart() {
    const [cart, setCart] = useState(data);

    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
        count: cart.reduce((prev, curr) => prev + curr.count, 0)
    })

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
            count: cart.reduce((prev, curr) => prev + curr.count, 0),
        });
    }, [cart])

    // удаление продукта
    const removeProduct = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.id)
        )
    }

    // увеличения счетчика количества продукта
    const increase = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1,
                        priceTotal: (product.count + 1) * product.price,
                    };
                }
                return product
            })
        })
    }

    // уменьшение счетчика количества продукта
    const decrease = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {

                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price,
                    };
                }
                return product
            })
        })
    }

    // обработчик ввода в инпут
    const changeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }
                return product
            })
        })
    }

    const products = cart.map((product) => {
        return <Product
            product={product}
            key={product.id}
            removeProduct={removeProduct}
            changeValue={changeValue}
            increase={increase}
            decrease={decrease}
        />;
    });

    return (
        <>
            <CartHeader />
            {products}
            <CartFooter total={total} />
        </>

    )
}
