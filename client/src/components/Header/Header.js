import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledUl, StyledLi, Logo } from "./headerStyle";

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/" className="logo"><Logo src="https://i.postimg.cc/65Jr9g81/dark-logo-transparent.png" alt="Activity-Finder" /></Link>
            <StyledUl>
                <Link to="/register" className="auth-link"> <StyledLi>Register</StyledLi> </Link>
                <Link to="/login" className="auth-link"> <StyledLi>Login</StyledLi> </Link>
            </StyledUl>
        </StyledHeader>
    );
};

export default Header;