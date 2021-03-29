import { Component } from "react";
import UserContext from "./Context"

class UserAuthProvider extends Component{
    constructor(props){
        super(props)

        this.state = {
            loggedIn: false,
            username: "",
            id: "",
            city:""
        }
    }

    logIn = (username,id,city) => {
        this.setState({
            loggedIn: true,
            username,
            id,
            city
        })
    }

    logOut = () => {
        document.cookie = `x-auth-token=`
        this.setState({
            loggedIn: false,
            username: "",
            id: "",
            city:""
        })
    }

    render(){
        return(
        <UserContext.Provider value={{
            loggedIn: this.state.loggedIn,
            id: this.state.id,
            username: this.state.username,
            city: this.state.city,
            logIn: this.logIn,
            logOut: this.logOut

        }}>
            {this.props.children}
        </UserContext.Provider>
        )
        
    }
    
}

export default UserAuthProvider