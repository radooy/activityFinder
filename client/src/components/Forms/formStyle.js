import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0 auto;
    border-radius: 10px;
    padding: 0 30%;
`

const Heading = styled.h2`
    text-align:center;
    font-size:20px;
    color: #ccc7c7;
`

const Form = styled.form`
    display:grid;
`

const Input = styled.input`
    margin-bottom:15px;
    background-color:#ccc7c7;
    color:#000000;
    border-radius:10px;
    border:none;
    height:25px;
    font-size:18px;


    &:focus{
        background-color:#dcdcdc;
    }
`
const Select = styled.select`
    margin-bottom:15px;
    background-color:#ccc7c7;
    color:#000000;
    border-radius:10px;
    border:none;
    height:25px;
    font-size:15px;
`

const Submit = styled.input.attrs({
    type: "submit",
})`
    max-width:100px;
    width:100%;
    border-radius:10px;
    border:none;
    justify-self:center;
    font-family: "Comfortaa", 'Comic Sans MS', cursive;
    font-weight:800;
    cursor: pointer;
    background-color:#ccc7c7;


    &:hover{
        color:#ccc7c7;;
        background-color:transparent;
    }
`
const Label = styled.label`
    text-align: center;
    font-size:25px;
    color:#ffffff;;
    margin-bottom:8px;

`

export {
    Wrapper,
    Heading,
    Form,
    Input,
    Submit,
    Label,
    Select
}