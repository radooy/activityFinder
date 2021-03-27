import {  Switch, Route  } from "react-router-dom"
import Create from "../../Forms/Create/Create"

const User = () => {
    //Header
    return(
        <>
        <Switch>
            <Route exact path="/"/>
            <Route path="/create" component={Create}/>
        </Switch>
        </>
    );

        

    //Footer
}

export default User