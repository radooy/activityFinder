import React from "react"

const UserContext = React.createContext({
    loggedIn:false,
    username: "",
    id:"",
    city: "",
    logIn: ()=>{},
    logOut:()=>{}
});

export default UserContext