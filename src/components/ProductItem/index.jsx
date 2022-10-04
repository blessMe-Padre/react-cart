import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from './../../redux/reducer';

import formatPrice from '../../priceFormatter';
import { AddButton, GrayButton } from '../Buttons/styled';
import { ProductPrice } from '../Styled/ProductPrice';
import { ProductCard, ProductDescriptions, ProductImg, ProductTitle } from './styled';


export default function ProductItem({ product }) {
    const { img, title, price, descriptions } = product;

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemInCart);
    const isItemInCart = items.some(item => item.id === product.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(product.id))
        } else {
            dispatch(setItemInCart(product))
        }
    }

    return (
        <ProductCard>
            <div>
                <ProductImg>
                    <img src={`./img/products/${img}`} alt={title} />
                </ProductImg>
                <ProductTitle>{title}</ProductTitle>
                <ProductDescriptions>{descriptions}</ProductDescriptions>
                <ProductPrice>Цена: {formatPrice(price)} руб</ProductPrice>
            </div>
            {isItemInCart ?
                <GrayButton onClick={handleClick}>Убрать из корзины</GrayButton>
                : <AddButton onClick={handleClick}>Добавить в корзину</AddButton>
            }
        </ProductCard>
    )
}
