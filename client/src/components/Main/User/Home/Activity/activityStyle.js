import styled from "styled-components"

const ActivityWrapper = styled.div`
    display:${props => props.display};
    grid-template-columns: repeat(auto-fill,autofit, 200px);
    
    border-radius:20px;
    padding:15px 20px;
    margin:10px;
    flex-wrap:wrap;
    box-shadow: inset 0 0 40px #ffffff;
    

    .activity-img{
        max-width:40%;
        width:100%;
        border-radius:20px;
        box-shadow:2px 2px 2px white;
    }

    .preview{
        display:inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 30ch;
    }

    .flex{
        margin: 0 70px;
        padding: 0 20px;
        border-radius:5px;
        max-width:30%;
        width:90%;
    }

`
const Heading = styled.h3`
    text-shadow: 1px 1px #ffffff;
    font-size:30px;
    margin: 0;
    text-align:center;
`

const InfoFor = styled.p`
font-size:19px;
`

export {
    ActivityWrapper,
    Heading,
    InfoFor,
}