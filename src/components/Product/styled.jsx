import styled from "styled-components";

export const ProductInner = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: 2fr repeat(3, 3fr) 1fr;
    column-gap: 30px;
    color: #000000;
    padding: 0 10px;
    box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 20%);
    gap: 10px;

    @media (max-width: 768px) {
        display: block;
    }
`
export const ProductItem = styled.div`
    padding: 10px 0;
    font-size: 18px;
`