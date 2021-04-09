import { useContext } from "react";
import UserContext from "../../../Context/Context";
import AllActivities from "./Activities/AllActivities";
import { Wrapper, Heading } from "./homeStyle";

const HomePage = () => {

    const userInfo = useContext(UserContext);

    return(

        <Wrapper>
            <Heading>Available activities for you, {userInfo.username}</Heading>
            <AllActivities/>
        </Wrapper>

    );
};

export default HomePage