import styled from "styled-components"

const font = "'Audiowide', cursive;"

const Wrapper = styled.div`
    box-shadow: inset 2px 10px 40px 10px #dddaec;
    border-radius: 20px;
    padding: 60px;


    .my-publications-button{
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
`

const Heading = styled.h2`
    font-size:30px;
    font-family:${font};
    text-align:center;
    text-transform:uppercase;
    color:white;
    text-shadow:2px 2px black;
    
    `
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export {
    Wrapper,
    Heading,
    Container
}