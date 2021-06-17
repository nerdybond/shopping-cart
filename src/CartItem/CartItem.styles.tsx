import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;


    div{
        flex: 1;
    }

    .information, .button {
        display: flex;
        justify-content: space-between;
    }
    img{
        max-height: 50px;
        max-width: 40px;
        object-fit: cover;
        margin-top: 10px;
    }
`;