import styled, {keyframes} from "styled-components";

const slideFromLeft = keyframes`
    0%{
        transform: translateX(-100%);
    }

    100%{
        transform: translateX(0);
    }
`

const ContentWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns: 55% 45%;
margin:10px 0;


.guest-page-image{
    max-width:100%;
    border-radius:10px;
    opacity:85%;
    animation-name: ${slideFromLeft};
    animation-duration:2s;
}
`;

export {
    ContentWrapper
}