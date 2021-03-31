import {  Switch, Route  } from "react-router-dom"
import HomePage from "./Home/Home"
import CreatePage from "../User/Create/CreatePage"
import Profile from "../User/Profile/Profile"
import Details from "./Details/Details"
import Edit from "./Edit/Edit"

const User = () => {
    //Header



    return(
        <>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/create" component={CreatePage}/>
            <Route path="/my-profile" component={Profile}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/edit/:id" component={Edit}/>
        </Switch>
        </>
    );

        

    //Footer
}

export default User