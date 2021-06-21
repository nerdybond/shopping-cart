import styled from 'styled-components';

export const Wrapper = styled.div`
font-family: Montserrat;
width: 100%;
padding: 20px;

.orderConfirm{
    display: flex;
    margin: 10px;
    justify-content: space-between;
    height: 100%;
    text-transform: capitalize;
    padding: 0px 10px 10px 0px;

    border-radius: 10px;
    border: 2px solid black;
    font-weight: bolder;
    background: linear-gradient(to bottom, 
    orange 0 66.6%, white 66.6% 100%);
    text-transform: capitalize;
    width: fit-content;
    margin: 15px 0 15px 0;
    padding: 0 0 0 0;
}


.circle{
    display: flex;
    border-radius: 30px;
    border: 2px solid black;
    background: white;
    margin: 10px;
    justify-content: space-between;
    height: 100%;
    text-transform: capitalize;
    position: static;
    padding: 10px 10px 10px 10px;
}

button {
border-radius: 10px;
border: 2px solid black;
font-weight: bolder;
background: black;
color: white;
text-transform: capitalize;
width: fit-content;
margin: 15px 0 15px 0;
padding: 0 0 0 0;
}

`

