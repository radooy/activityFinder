import styled from "styled-components";

const StyledFooter = styled.footer`
    color:white;
    text-align:center;
    display:flex;
    justify-content:space-around;
    margin-bottom: 20px;


    .footer-link{
        text-decoration:none;
        color:white;
        &:hover{
        color:black;
    }
    }
`;

export default StyledFooter;