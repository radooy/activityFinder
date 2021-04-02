import styled from "styled-components"

const FilterWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin:20px auto;
    align-items:center;
    box-shadow: inset 2px 2px 10px 4px black;
    max-width:75%;
    width:100%;
    border-radius:20px;
    flex-wrap: wrap;

    .reset-btn{
        background-color:#f7de00;
    }

    .back-btn{
        background-color:#b30d0d;
    }

    .go-btn{
        background-color:#03b603;
    }

    .select-btn{
        background-color: #2c2353
    }
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