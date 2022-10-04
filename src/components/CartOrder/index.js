import React from 'react';
import { Cost, Order, OrderItem, OrderItemTotal, Title, Total } from './styled';
import formatPrice from './../../priceFormatter';
import { OrderButton } from '../Buttons/styled';


export default function CartOrder({ total }) {
    const { count, price } = total;
    const totalCost = price - (price * 25 / 100);

    return (
        <Order>
            <div>
                <Title>Ваш заказ:</Title>
                <OrderItem>
                    <span>Товаров в заказе:</span>
                    <span>{count} ед.</span>
                </OrderItem>
                <OrderItem>
                    <span>Сумма заказа:</span>
                    <span>{formatPrice(price)} руб.</span>
                </OrderItem>
                <OrderItem>
                    <span>Ваша скидка:</span>
                    <span>25%</span>
                </OrderItem>
                <OrderItemTotal>
                    <div>
                        <Total>Итого</Total>
                        <p>без учёта доставки:</p>
                    </div>
                    <Cost>{formatPrice(totalCost)} ₽</Cost>
                </OrderItemTotal>
            </div>
            <OrderButton>оформить заказ</OrderButton>
        </Order>
    )
}
