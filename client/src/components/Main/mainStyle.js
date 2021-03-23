import styled from "styled-components";


const MainContainer = styled.div`
    margin: 20px 0;
`

const ContentWrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 55% 45%;
    margin:10px 0;


    .guest-page-image{
        max-width:100%;
        border-radius:10px;
        opacity:70%;
    }
`;

export {
    MainContainer,
    ContentWrapper
}