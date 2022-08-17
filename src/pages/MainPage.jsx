import React from 'react';
import { useState } from "react";

import { Container } from "./../components/Container";
import { PageTitle } from "./../components/Title";
import ProductItem from '../components/ProductItem';

import data from './../data';
import { StyledLink } from '../components/Link/styled';
import { PageHeader, PageWrapper } from './../components/Styled/styled'

export default function MainPage() {
    const [cart, setCart] = useState(data);

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
                <StyledLink to="/cart">Корзина</StyledLink>
            </PageHeader>
            <PageWrapper>
                {products}
            </PageWrapper>
        </Container>
    )
}
