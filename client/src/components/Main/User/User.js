import {  Switch, Route  } from "react-router-dom"
import HomePage from "./Home/Home"
import Create from "../../Forms/Create"
import Profile from "../User/Profile/Profile"

const User = () => {
    //Header
    return(
        <>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/create" component={Create}/>
            <Route path="/my-profile" component={Profile}/>
        </Switch>
        </>
    );

        

    //Footer
}

export default User