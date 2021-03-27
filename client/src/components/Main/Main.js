import { MainContainer } from "./mainStyle";
import Guest from "./Guest/Guest";
import User from "./User/User"

const Main = () => {
    let loggedIn = true;
    return (
        <MainContainer>
        
        {/* If not logged in */}

            {!loggedIn && <Guest/>}

        {/* /If not logged in */}



        {/* If logged in */}

            {loggedIn && <User/>}

        {/* /If logged in */}


        </MainContainer>
    );
}

export default Main;