import styled from "styled-components";

export const Header = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(3, 3fr) 1fr;
    column-gap: 30px;
    background-color: #c9c9c9;
    color: #000000;
    padding: 20px 10px;
`
export const HeaderItem = styled.div`
    grid-column-start: 2;
`