import styled from "styled-components";

const MainContainer = styled.div`
    margin: 20px 0;
`
const Button = styled.button`
    margin-left:50px;
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
const Error = styled.div`
    color:red;
    font-size:${props=> props.fontSize || "smaller" };
    font-weight: bold;
    margin:10px 0;
`

export {
    MainContainer,
    Button,
    Error
}