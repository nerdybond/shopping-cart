import styled from 'styled-components';

export const Wrapper = styled.div`
border-top: none;
border-right: none;
border-left: none;
border-bottom: 1px solid grey;
border-radius: 0;

.displayItem{
    display: flex;
    margin: 10px;
    justify-content: space-between;
    height: 100%;
    text-transform: capitalize;
    padding: 0px 10px 10px 0px;
}

button {
border-radius: 10px;
border: 2px solid black;
font-weight: bolder;
background: linear-gradient(to right, 
orange 0 66.6%, white 66.6% 100%);
text-transform: capitalize;
width: fit-content;
margin: 15px 0 15px 0;
padding: 0 0 0 0;
}

img {
    height: 80%;
    max-height: 200px;
    max-width: 200px;
    width: 50%;
    display: block;
    object-fit: cover;
    border-radius: 20px 20px 20px 20px;
    border: 2px solid black;
}

p{
    color: grey;
    font-weight: bold;
}

.title{
    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
}


.priceAdd{
    display: flex;
    width: 100%;
    height: 25%
    float: left;
    justify-content: space-between;
}

.itemInfo{
    padding-left: 1rem;
    height: 100%;
    width: 100%;
}

`;