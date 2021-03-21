import styled from "styled-components"

const StyledHeader = styled.header`
    margin-top:20px;
    display:flex;
    justify-content: space-between;
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display:flex;
`
const StyledLi= styled.li`
    margin:0 5px;
`

const Logo = styled.img`
    width:100%;
    height:100%;
    max-width:200px;
    max-height:180px;
`

export {
    StyledHeader,
    StyledUl,
    StyledLi,
    Logo
}