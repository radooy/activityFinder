import React from "react";
import { useContext } from "react";
import UserContext from "../Context/Context";
import { Link, useHistory } from "react-router-dom";
import { StyledHeader, StyledUl, StyledLi, Logo } from "./headerStyle";

const Header = () => {
    const userInfo = useContext(UserContext);
    let history = useHistory();

    const logOut = () => {
        userInfo.logOut();
        history.push("/login");
    }

    return (
        <StyledHeader>
            <Link to="/" className="logo"><Logo src="https://i.postimg.cc/65Jr9g81/dark-logo-transparent.png" alt="Activity-Finder" /></Link>
            <StyledUl>
                {userInfo.loggedIn && <>
                    <Link to="/filter" className="header-link"> <StyledLi>Filter</StyledLi> </Link>
                    <Link to="/create" className="header-link"> <StyledLi>Create a publication</StyledLi> </Link>
                    <Link to="/my-profile" className="header-link"> <StyledLi>My profile</StyledLi> </Link>
                    <StyledLi className="header-link logout" onClick={logOut}>Logout</StyledLi>
                </>
                }
                {userInfo.loggedIn === false && <>
                    <Link to="/register" className="header-link"> <StyledLi>Register</StyledLi> </Link>
                    <Link to="/login" className="header-link"> <StyledLi>Login</StyledLi> </Link>
                </>}
            </StyledUl>
        </StyledHeader>
    );
};

export default Header;