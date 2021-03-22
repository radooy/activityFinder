import React from "react";
import {StyledHeader, StyledUl, StyledLi, Logo } from "./headerStyle"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cities: [

            ]
        }
    }
    
    //Test if data is accessible from restapi
    componentDidMount() {
        fetch("http://localhost:5000/api/utils/cities")
        .then(res => res.json())
        .then((data) => {
          this.setState({ cities: data.cities })
          console.log(data.cities);
        })
        .catch(err=>console.log(err));
      }

    render(){
        return (
            /* Will be transformed to Link To */
            <StyledHeader>
                <Logo src="https://i.postimg.cc/65Jr9g81/dark-logo-transparent.png" alt="Activity-Finder"/>
                <StyledUl>
                    <StyledLi>Register</StyledLi> 
                    <StyledLi>Login</StyledLi>
                    <StyledLi>Hello, user</StyledLi>
                    <StyledLi>Logout</StyledLi>
                </StyledUl>
            </StyledHeader>
        );
    };
}

export default Header;