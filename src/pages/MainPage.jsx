import React from 'react';
import { useState } from "react";
import { useSelector } from 'react-redux';

import data from './../data';

import { Container } from "./../components/Container";
import { PageTitle } from "./../components/Title";
import ProductItem from '../components/ProductItem';
import { CartQuantity } from '../components/Styled/CardQuantity';
import { StyledLink } from '../components/Link/styled';
import { PageHeader, PageWrapper } from './../components/Styled/styled'

export default function MainPage() {
    const [cart] = useState(data);
    const item = useSelector(state => state.cart.itemInCart);
    const totalItem = item.length;
    console.log(cart);

    const products = cart.map((product) => {
        return <ProductItem
            product={product}
            key={product.id}
        />;
    });

    return (
        <Container>
            <PageHeader>
                <PageTitle>Популярные товары</PageTitle>
                <StyledLink to="cart">
                    <img src="./img/icons/cart.svg" alt="cart" />
                    корзина
                    {totalItem > 0 ? (<CartQuantity>{totalItem}</CartQuantity>) : null}
                </StyledLink>
            </PageHeader>
            <PageWrapper>
                {products}
            </PageWrapper>
        </Container>
    )
}
