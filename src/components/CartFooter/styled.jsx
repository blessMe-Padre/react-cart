import styled from "styled-components";

export const Footer = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(3, 3fr) 1fr;
    column-gap: 30px;
    background-color: #c9c9c9;
    color: #000000;
    padding: 10px 0;
`
export const FooterItem = styled.div`
    grid-column-start: 3;
`