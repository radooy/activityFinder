import styled from "styled-components";

const DetailsWrapper = styled.div`
   margin:70px;
`

const Button = styled.button`
    margin-left:100px;
    font-family: 'Audiowide', cursive;
    width:100px;
    height:40px;
    font-size:20px;
    border-radius:10px;
    background-color:transparent;
    cursor:pointer;
    border-color:transparent;
    color:white;
    background-color:grey;
    border-color:transparent;

    &:hover{
        border-color:transparent;
        background-color:transparent;
        color:black;
        font-size:22px;

    }
`



export {
    DetailsWrapper,
    Button
}