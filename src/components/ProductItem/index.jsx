import React from 'react';
import { Button } from '../Buttons/styled';
import { setItemInCart } from './../../redux/reducer';
import { useDispatch } from 'react-redux';

export default function ProductItem({ product }) {
    const { img, title, price } = product;
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(product))
        console.log('click');
    }
    return (
        <div>
            <div>
                <img src={`./img/products/${img}`} alt={title} />
            </div>
            <div>{title}</div>
            <div>{price} руб</div>
            <Button onClick={handleClick}>В корзину</Button>
        </div>
    )
}
