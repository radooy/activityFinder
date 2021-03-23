import React from "react";
import { Link } from "react-router-dom";
import {StyledHeader, StyledUl, StyledLi, Logo } from "./headerStyle";

class Header extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     cities: [

        //     ]
        // }
    }
    
    //Test if data is accessible from restapi
    // componentDidMount() {
    //     fetch("http://localhost:5000/api/utils/cities")
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ cities: data.cities })
    //       console.log(data.cities);
    //     })
    //     .catch(err=>console.log(err));
    //   }

    render(){
        return (
            /* Will be transformed to Link To */
            <StyledHeader>
                <Link to="/" className = "logo"><Logo src="https://i.postimg.cc/65Jr9g81/dark-logo-transparent.png" alt="Activity-Finder"/></Link>
                <StyledUl>
                    <Link to="/register" className="auth-link"> <StyledLi>Register</StyledLi> </Link>
                    <Link to="/login" className="auth-link"> <StyledLi>Login</StyledLi> </Link>
                </StyledUl>
            </StyledHeader>
        );
    };
}

export default Header;