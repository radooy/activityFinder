import { useContext } from "react";
import UserContext from "../Context/Context";
import User from "./User/User"
import GuestPage from "./Guest/GuestPage";
import { MainContainer } from "./mainStyle";

const Main = () => {
    
    const userInfo = useContext(UserContext);

    return (
        <MainContainer>
        
        {/* If not logged in */}

            {userInfo.loggedIn===false && <GuestPage/>}

        {/* /If not logged in */}



        {/* If logged in */}

            {userInfo.loggedIn && <User/>}

        {/* /If logged in */}


        </MainContainer>
    );
}

export default Main;