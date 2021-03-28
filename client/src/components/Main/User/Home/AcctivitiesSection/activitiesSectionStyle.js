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
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    margin:auto;
    animation-name: ${fadeIn};
    animation-duration: 5s;
`

export {ActivitiesWrappper}