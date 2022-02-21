import styled, {keyframes} from "styled-components";

const slideFromRight = keyframes`
    0%{
        transform: translateX(100%);
    }

    100%{
        transform: translateX(0);
    }
`

const Wrapper = styled.div`
    margin: 0 auto;
    border-radius: 10px;
    padding: 0 30%;
    animation-name:${slideFromRight};
    animation-duration:2s;
`

const Heading = styled.h2`
    text-align:center;
    font-size:20px;
    color: #ccc7c7;
`

const Form = styled.form`
    display:grid;

    .activity-submit{
        margin-top: 10px;
        max-width:150px;
        height:30px;
    }
`

const Input = styled.input`
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
    margin-top: 10px;

    &:hover{
        color:#ccc7c7;;
        background-color:transparent;
    }
`
const Label = styled.label`
    text-align: center;
    font-size:25px;
    color:#ffffff;;
    margin: 5px 0;

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