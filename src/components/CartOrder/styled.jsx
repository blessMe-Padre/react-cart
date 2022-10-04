import styled from "styled-components";

export const Order = styled.div`
    background-color: #f3f3f6;
    color: #000000;
    padding: 30px 20px;
`

export const Title = styled.h2`
    margin: 0 0 25px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
`

export const OrderItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #6a6a6a;
`

export const OrderItemTotal = styled(OrderItem)`
    margin-top: 30px;
`
export const Total = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
`

export const Cost = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
`
