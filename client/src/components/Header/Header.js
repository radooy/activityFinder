import React from "react";
import { Link, useHistory } from "react-router-dom";
import { StyledHeader, StyledUl, StyledLi, Logo } from "./headerStyle";
import { logOut as logOutReducer } from "../../features/userAuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const loggedIn = useSelector((state)=>{
        return state.user.value.loggedIn
    });
    const history = useHistory();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logOutReducer());
        history.push("/login");
    };

    return (
        <StyledHeader>
            <Link to="/" className="logo"><Logo src="https://i.postimg.cc/65Jr9g81/dark-logo-transparent.png" alt="Activity-Finder" /></Link>
            <StyledUl>
                {loggedIn && <>
                    <Link to="/filter" className="header-link"> <StyledLi>Filter</StyledLi> </Link>
                    <Link to="/create" className="header-link"> <StyledLi>Create an activity</StyledLi> </Link>
                    <Link to="/my-profile" className="header-link"> <StyledLi>My profile</StyledLi> </Link>
                    <StyledLi className="header-link logout" onClick={logOut}>Logout</StyledLi>
                </>
                }
                {loggedIn === false && <>
                    <Link to="/register" className="header-link"> <StyledLi>Register</StyledLi> </Link>
                    <Link to="/login" className="header-link"> <StyledLi>Login</StyledLi> </Link>
                </>}
            </StyledUl>
        </StyledHeader>
    );
};

export default Header