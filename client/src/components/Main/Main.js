import DataProvider from "../Contexts/DataProvider";
import User from "./User/User";
import GuestPage from "./Guest/GuestPage";
import { MainContainer } from "./mainStyle";
import { useSelector } from "react-redux";

const Main = (props) => {
    const loggedIn = useSelector((state)=>{
        return state.user.value.loggedIn
    });

    return (
        <DataProvider>
            <MainContainer>
                {loggedIn ? <User/> : <GuestPage {...props}/>}
            </MainContainer>
        </DataProvider>
    );
};

export default Main