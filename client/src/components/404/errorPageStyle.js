import styled from "styled-components"

const Wrapper = styled.div`
    background-color:black;
    text-align:center;
    border-radius:30px;
    display:grid;
    justify-content:space-around;
    padding-bottom:50px;
`
const ErrorImage = styled.img`
    max-width:650px;
    width:100%;
    border-radius:30px;
`

const Button = styled.button`
  max-width:100px;
  height:75px;
  width:100%;
  justify-self:center;
  border-radius:20px;
  font-size:20px;
  cursor:pointer;
  border:none;
  font-family:"Comfortaa", 'Comic Sans MS', cursive;

  &:hover{
    font-size:20.5px;
    background-color:#75ff75;
  }
`

export {
    ErrorImage,
    Wrapper,
    Button
}