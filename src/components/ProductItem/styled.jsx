import styled from "styled-components";

export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`