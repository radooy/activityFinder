import styled from "styled-components"

const ActivityWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,autofit, 200px);
    
    border-radius:3px;
    padding:5px;
    margin:10px;
    

    .activity-img{
        max-width:50%;
    }

    .preview{
        display:inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 30ch;
    }

    &:hover{
        box-shadow:5px 5px 8px black;
        cursor:pointer;
        background-color: #d8e4fb;
    }
`
const Heading = styled.h3`
    text-shadow: 1px 1px #ffffff;
    font-size:30px;
    
`

const InfoFor = styled.p`
font-size:19px;
`

export {
    ActivityWrapper,
    Heading,
    InfoFor,
}