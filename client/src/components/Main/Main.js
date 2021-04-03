import { useContext } from "react";
import UserContext from "../Context/Context";
import User from "./User/User"
import GuestPage from "./Guest/GuestPage";
import { MainContainer } from "./mainStyle";

const Main = (props) => {
    const userInfo = useContext(UserContext);

    return (
        <MainContainer>
            
            {userInfo.loggedIn ? <User/> : <GuestPage {...props}/>}

        </MainContainer>
    );
}

export default Main;