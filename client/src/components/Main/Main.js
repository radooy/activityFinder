import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import DataProvider from "../Contexts/DataProvider";
import User from "./User/User";
import GuestPage from "./Guest/GuestPage";
import { MainContainer } from "./mainStyle";

const Main = (props) => {
    const context = useContext(UserContext);

    return (
        <DataProvider>
            <MainContainer>
                {context.loggedIn ? <User/> : <GuestPage {...props}/>}
            </MainContainer>
        </DataProvider>
    );
};

export default Main