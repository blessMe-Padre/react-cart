import { Link } from 'react-router-dom';
import styled from "styled-components";


export const StyledLink = styled(Link)`
    font-size: 18px;
    position: relative;
    color: #f2f2f2;
    transition: color 0.3s ease;
    text-decoration: none;
    margin-left: 10px;

    &:hover,
    &:focus {
        color: #ABE1EB;
    }
`;
