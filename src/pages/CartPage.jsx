import React from 'react';
import { StyledLink } from '../components/Link/styled';
import { PageHeader } from '../components/Styled/styled';
import Cart from "./../components/Cart";
import { Container } from "./../components/Container";
import { PageTitle } from "./../components/Title";

export default function CartPage() {
    return (
        <Container>
            <PageHeader>
                <PageTitle>Корзина</PageTitle>
                <StyledLink to="/">на главную</StyledLink>
            </PageHeader>
            <Cart />
        </Container>
    )
}
