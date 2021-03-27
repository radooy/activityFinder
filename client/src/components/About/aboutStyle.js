import styled, {keyframes} from "styled-components"

const fadeIn = keyframes`
    0%{
         opacity: 0;
    }

   100%{
        opacity: 1;
    }
`

const Wrapper = styled.div`
    max-width:95%;
    width:100%;
    margin:auto;
    animation-name: ${fadeIn};
    animation-duration: 3s;
`
const Heading = styled.h1`
    color:white;
    font-size: 30px;
    text-align:center;
    text-shadow: 2px 2px #000000;
`

export {
    Wrapper,
    Heading
}