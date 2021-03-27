import {  Switch, Route  } from "react-router-dom"
import HomePage from "./Home/Home"
import CreatePage from "../User/Create/CreatePage"
import Profile from "../User/Profile/Profile"
import About from "../../About/About"

const User = () => {
    //Header



    return(
        <>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/create" component={CreatePage}/>
            <Route path="/my-profile" component={Profile}/>
            <Route path="/about" component={About}/>
        </Switch>
        </>
    );

        

    //Footer
}

export default User