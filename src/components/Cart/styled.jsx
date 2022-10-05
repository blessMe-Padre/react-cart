import styled from "styled-components";


export const CartItemWrapper = styled.div`
    padding: 30px 0;
    display: grid;
    grid-template-columns: 68% 28%;
    gap: 30px;


    @media (max-width: 1023px) {
        display: block;
    }
`;

export const CartItemList = styled.ul`
    display: grid;
    gap: 15px;
    padding: 0;
    margin: 0;
`;
