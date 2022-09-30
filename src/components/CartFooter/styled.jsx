import styled from "styled-components";

export const Footer = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(3, 3fr) 1fr;
    column-gap: 30px;
    border-top: 2px solid #c9c9c9;
    background-color: #f2f2f2;
    color: #000000;
    padding: 20px 0;
`
export const FooterItem = styled.div`
    grid-column-start: 3;
`