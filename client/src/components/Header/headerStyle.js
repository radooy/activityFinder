import styled from "styled-components"

const StyledHeader = styled.header`
    margin-top:20px;
    display:flex;
    justify-content: space-between;



    .logo{
        padding-top:10px;
    }
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display:flex;

    .auth-link{
        text-decoration:none;
        font-size:20px;
    }

`
const StyledLi= styled.li`
    margin:0 20px;
    color:#e9e9e9;
    &:hover{
        color:black;
    }
`

const Logo = styled.img`
    max-width:200px;
    max-height:180px;
    filter: drop-shadow(0px 3px 1px grey );
    padding:auto;
`

export {
    StyledHeader,
    StyledUl,
    StyledLi,
    Logo
}