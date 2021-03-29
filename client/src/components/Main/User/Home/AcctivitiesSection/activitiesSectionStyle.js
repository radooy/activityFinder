import styled, {keyframes} from "styled-components"

const fadeIn = keyframes`
    0%{
         opacity: 0;
    }

   100%{
        opacity: 1;
    }
`

const ActivitiesWrappper = styled.section`
    max-width: 95%;
    width: 100%;
    display: ${props => props.display};
    grid-template-columns: repeat(5, 1fr);
    margin:auto;
    animation-name: ${fadeIn};
    animation-duration: 5s;


    .details-link{
        text-decoration:none;
        color:black
    }
`
const NoActivitiesDiv = styled.div`
    margin-top:30px;
    text-align:center;
    font-size:30px;
    color:whitesmoke;
`
export {
    ActivitiesWrappper,
    NoActivitiesDiv
}