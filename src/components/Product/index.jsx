import React from 'react';
import ButtonDelete from '../Buttons';
import Count from '../Count';
import formatPrice from './../../priceFormatter';
import { ProductInner, ProductItem } from './styled';

export default function Product({ product, removeProduct, increase, decrease, changeValue }) {
    const { img, title, priceTotal, count, id } = product;

    return (
        <ProductInner>
            <ProductItem>
                <img src={`./img/products/${img}`} alt={title} />
            </ProductItem>
            <ProductItem>{title}</ProductItem>
            <ProductItem>
                <Count
                    count={count}
                    changeValue={changeValue}
                    increase={increase}
                    decrease={decrease}
                    id={id}
                />
            </ProductItem>
            <ProductItem>{formatPrice(priceTotal)} руб</ProductItem>
            <ProductItem>
                <ButtonDelete removeProduct={removeProduct} id={id} />
            </ProductItem>
        </ProductInner>
    )
}
