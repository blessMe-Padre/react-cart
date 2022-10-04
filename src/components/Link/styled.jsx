import { Link } from 'react-router-dom';
import styled from "styled-components";


export const StyledLink = styled(Link)`
    font-size: 18px;
    line-height: 24px;
    position: relative;
    color: #000000;
    transition: color 0.3s ease;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        color: #282c34;
    }

    img {
        margin-right: 15px;
    }
`;
