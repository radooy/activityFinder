import styled from "styled-components";

const font = "'Audiowide', cursive;";

const ButtonContainer = styled.div`
    display:grid;
    margin-right: 20px;
    align-self:flex-start;

    .my-activities-button{
        font-family:${font};
        max-width:200px;
        width:100%;
        margin:10px;
        background-color: #2c2353;
        &:hover{
            font-size:20px;
            color: #2c2353;
            background-color:white;
        }
    }

    .applied-for{
        height:70px;
    }
    .active{
        background-color : #2c2353;
        border-radius: 20px;
    }

    .back{
        margin-top: 20px;
    }
`

export {
    ButtonContainer,
}