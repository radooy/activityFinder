import { MainContainer } from "./mainStyle";
import GuestPage from "./Guest/GuestPage";
import User from "./User/User"

const Main = () => {
    let loggedIn = true;
    return (
        <MainContainer>
        
        {/* If not logged in */}

            {!loggedIn && <GuestPage/>}

        {/* /If not logged in */}



        {/* If logged in */}

            {loggedIn && <User/>}

        {/* /If logged in */}


        </MainContainer>
    );
}

export default Main;