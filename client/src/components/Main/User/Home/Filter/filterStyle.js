import styled from "styled-components"

const FilterWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin:20px auto;
    align-items:center;
    box-shadow: inset 2px 2px 2px 4px black;
    max-width:75%;
    width:100%;
    border-radius:10px;
    flex-wrap: wrap;
`
const FilterParagraph = styled.p`
    font-size:25px;
    margin-right:10px;
    font-family: 'Audiowide', cursive;
`

const Select = styled.select`
    margin-left:80px;
    font-family: 'Audiowide', cursive;
    width:160px;
    height:40px;
    font-size:17px;
    border-radius:10px;
    background-color:transparent;
    cursor:pointer;
    border-color:transparent;
    color:white;
    background-color:grey;
    border-color:transparent;
`
export {
    FilterWrapper,
    FilterParagraph,
    Select
}