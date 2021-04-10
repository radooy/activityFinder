import { useContext } from "react";
import Context from "../Context/Context";
import User from "./User/User";
import GuestPage from "./Guest/GuestPage";
import { MainContainer } from "./mainStyle";

const Main = (props) => {
    const context = useContext(Context);

    return (
        <MainContainer>
            {context.loggedIn ? <User/> : <GuestPage {...props}/>}
        </MainContainer>
    );
};

export default Main