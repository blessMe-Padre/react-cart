import React from 'react';
import { Footer, FooterItem } from './styled';
import formatPrice from './../../priceFormatter';


export default function CartFooter({ total }) {
    const { count, price } = total;

    return (
        <Footer>
            <FooterItem> {count} ед.</FooterItem>
            <p>{formatPrice(price)} руб.</p>
        </Footer>
    )
}
