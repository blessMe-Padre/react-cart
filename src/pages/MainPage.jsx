import React from 'react';
import { useState } from "react";

import { Container } from "./../components/Container";
import { PageTitle } from "./../components/Title";
import ProductItem from '../components/ProductItem';

import styled from "styled-components";
import data from './../data';

export default function MainPage() {
    const [cart, setCart] = useState(data);

    const products = cart.map((product) => {
        return <ProductItem
            product={product}
            key={product.id}
        />;
    });

    const MainPageWrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    `

    return (
        <Container>
            <PageTitle>Главная страница</PageTitle>
            <MainPageWrapper>
                {products}
            </MainPageWrapper>
        </Container>
    )
}
