import styled from "styled-components";

export const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 30px;
    border: none;
    cursor: pointer;
    color: #fff;

    @media (max-width: 686px) {
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
`
export const GrayButton = styled(AddButton)`
    background-color: gray;
`