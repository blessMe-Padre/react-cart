import React from 'react';
import { Button } from '../Buttons/styled';
import { setItemInCart, deleteItemFromCart } from './../../redux/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


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
            <div>{title}</div>
            <div>{price} руб</div>
            <Button onClick={handleClick}>
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    )
}
