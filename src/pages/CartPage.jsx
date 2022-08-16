import React from 'react';
import Cart from "./../components/Cart";
import { Container } from "./../components/Container";
import { PageTitle } from "./../components/Title";

export default function CartPage() {
    return (
        <Container>
            <PageTitle>Корзина</PageTitle>
            <Cart />
        </Container>
    )
}
