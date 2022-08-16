import styled from "styled-components";

export const ProductInner = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(3, 3fr) 1fr;
    column-gap: 30px;
    background-color: #f2f2f2;
    color: #000000;
    padding: 0 10px;
`
export const ProductItem = styled.div`
    padding: 10px 0;
    font-size: 18px;
`