import styled from "styled-components";

export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const ProductCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`

export const ProductDescriptions = styled.div`
    font-size: 14px;
    margin-bottom: 25px;
`

export const ProductImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductTitle = styled.div`
    text-align: center;
    margin-bottom: 20px;
`