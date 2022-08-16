import React from 'react'
import ButtonDelete from '../Buttons'
import { ProductInner, ProductItem } from './styled'

export default function Product({ product, removeProduct }) {
    const { img, title, price, count, id } = product;

    return (
        <ProductInner>
            <ProductItem>
                <img src={`./img/products/${img}`} alt={title} />
            </ProductItem>
            <ProductItem>{title}</ProductItem>
            <ProductItem>1</ProductItem>
            <ProductItem>{price} руб</ProductItem>
            <ProductItem>
                <ButtonDelete removeProduct={removeProduct} id={id} />
            </ProductItem>
        </ProductInner>
    )
}
