import User from "./User/User";
import GuestPage from "./Guest/GuestPage";
import { MainContainer } from "./mainStyle";
import { useSelector } from "react-redux";

const Main = (props) => {
    const loggedIn = useSelector((state) => {
        return state.user.value.loggedIn
    });

    return (
        <MainContainer>
            {loggedIn ? <User /> : <GuestPage {...props} />}
        </MainContainer>
    );
};

export default Main