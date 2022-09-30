import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from './../../redux/reducer';

import formatPrice from '../../priceFormatter';
import { AddButton, GrayButton } from '../Buttons/styled';
import { ProductPrice } from '../Styled/ProductPrice';


export default function ProductItem({ product }) {
    const { img, title, price } = product;

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
        <div>
            <div>
                <img src={`./img/products/${img}`} alt={title} />
            </div>
            <p>{title}</p>
            <ProductPrice>Цена: {formatPrice(price)} руб</ProductPrice>
            {isItemInCart ?
                <GrayButton onClick={handleClick}>Убрать из корзины</GrayButton>
                : <AddButton onClick={handleClick}>Добавить в корзину</AddButton>
            }
        </div>
    )
}
