import styled from "styled-components";


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



export {
    IntroContainer,
    Heading,
    Paragraph
}