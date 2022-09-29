import React from 'react';
import { useState } from "react";

import { Container } from "./../components/Container";
import { PageTitle } from "./../components/Title";
import ProductItem from '../components/ProductItem';

import data from './../data';
import { StyledLink } from '../components/Link/styled';
import { PageHeader, PageWrapper } from './../components/Styled/styled'
import { useSelector } from 'react-redux';

export default function MainPage() {
    const [cart] = useState(data);
    const item = useSelector(state => state.cart.itemInCart);
    const totalItem = item.length;

    const products = cart.map((product) => {
        return <ProductItem
            product={product}
            key={product.id}
        />;
    });

    return (
        <Container>
            <PageHeader>
                <PageTitle>Главная страница</PageTitle>
                <div>
                    <StyledLink to="/cart">Корзина</StyledLink>
                    {totalItem > 0 ? (<span>{totalItem}</span>) : null}
                </div>
            </PageHeader>
            <PageWrapper>
                {products}
            </PageWrapper>
        </Container>
    )
}
