import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
    
    .column{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .column-text{
        font-size: 16px;
        font-weight: bold;
        margin: 20px auto;
    }
`;