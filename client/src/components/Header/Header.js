import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledUl, StyledLi, Logo } from "./headerStyle";

const Header = () => {
    let loggedIn = true;
    let username = "CurrentUser";
    return (
        <StyledHeader>
            <Link to="/" className="logo"><Logo src="https://i.postimg.cc/65Jr9g81/dark-logo-transparent.png" alt="Activity-Finder" /></Link>
            <StyledUl>
                {loggedIn && <>
                <Link to="/create" className="header-link create-link"> <StyledLi>Create</StyledLi> </Link>
                <Link to="/profile" className="header-link create-link"> <StyledLi>Hello, {username}</StyledLi> </Link>
                <Link to="/logout" className="header-link create-link"> <StyledLi>Logout</StyledLi> </Link>
                </>
                }
                {!loggedIn && <>
                <Link to="/register" className="header-link"> <StyledLi>Register</StyledLi> </Link>
                <Link to="/login" className="header-link"> <StyledLi>Login</StyledLi> </Link>
                </>}
            </StyledUl>
        </StyledHeader>
    );
};

export default Header;