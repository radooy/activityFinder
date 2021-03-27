import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    0%{
         opacity: 0;
    }

   100%{
        opacity: 1;
    }
`

const IntroContainer = styled.div`
    margin:50px 0;
`

const Heading = styled.h1`
    font-family: 'Audiowide', cursive;
    text-align:center;
    font-size: 70px;
`;

const Paragraph = styled.p`
    text-align:center;
    font-size:20px;
    font-weight:500;
    max-width:60%;
    margin:auto;
    color:#e9e9e9;




    .paragraph-link{
    text-decoration:underline;
    font-weight:900;
    color:black;
}
`;

const Article = styled.article`
    font-size: 32px;
    text-align:center;
    color:whitesmoke;
    padding: 5px 20px;
    text-shadow: 2px 2px #000000;
    animation-name: ${fadeIn};
    animation-duration: 3s;
`



export {
    IntroContainer,
    Heading,
    Paragraph,
    Article
}