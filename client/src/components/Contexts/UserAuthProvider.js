import { Component } from "react";
import UserContext from "./UserContext";

class UserAuthProvider extends Component{
    constructor(props){
        super(props)

        this.state = {
            loggedIn: null,
            username: "",
            id: "",
            city:""
        };
    };

    logIn = (username,id,city) => {
        this.setState({
            loggedIn: true,
            username,
            id,
            city
        });
    };

    logOut = () => {
        document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
        this.setState({
            loggedIn: false,
            username: "",
            id: "",
            city:""
        });
    };

    componentDidMount(){
        fetch("http://localhost:5000/api/auth/verify",{
            credentials:"include",
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.message) throw data.message;
            this.setState({
                loggedIn : data.isVerified,
                username: data.username,
                id: data.id,
                city:data.city
            });
        })
        .catch(err=>console.log(err));
    };


    render(){
        if (this.state.loggedIn === null) {
            return (
                <span>Loading...</span>
            );
        };
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
        );
    };
    
};

export default UserAuthProvider