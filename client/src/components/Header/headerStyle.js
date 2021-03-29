import styled from "styled-components"

const StyledHeader = styled.header`
    margin-top:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;

    .logo{
        padding-top:10px;
    }
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display:flex;
    flex-wrap:wrap;

    .header-link{
        text-decoration:none;
        font-size:20px;
    }

    .logout{
        cursor: pointer;
    }
`
const StyledLi= styled.li`
    margin:0 20px;
    color:#e9e9e9;
    text-shadow: 2px 2px #000000;
    &:hover{
        color:black;
        font-size:21px;
        text-shadow: none;
    }
`

const Logo = styled.img`
    max-width:200px;
    max-height:180px;
    min-width:117px;
    min-height:20px;
    width:100%;
    filter: drop-shadow(0px 3px 1px grey );
    padding:auto;
`

export {
    StyledHeader,
    StyledUl,
    StyledLi,
    Logo
}