import styled from "styled-components";

export const Button = styled.button`
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 686px) {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`
export const AddButton = styled.button`
    user-select: none;
    width: 140px;
    border-radius: 6px;
    background-color: #55b3c5;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 10px 5px;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
        background-color: #0b8096;
    }
`
export const GrayButton = styled(AddButton)`
    background-color: gray;
`

export const OrderButton = styled.button`
    display: block;
    width: 100%;
    background-color: #55b3c5;
    border: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    padding: 20px 5px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
        background-color: #0b8096;
    }
`