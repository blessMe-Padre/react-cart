import styled from "styled-components";


export const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px 0;
    gap: 20px;

    @media (max-width: 686px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 375px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
    }
`
export const PageHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`