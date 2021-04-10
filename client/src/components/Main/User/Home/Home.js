import { useContext } from "react";
import Context from "../../../Context/Context";
import AllActivities from "./Activities/AllActivities";
import { Wrapper, Heading } from "./homeStyle";

const HomePage = () => {
    const userInfo = useContext(Context);

    return(
        <Wrapper>
            <Heading>Available activities for you, {userInfo.username}</Heading>
            <AllActivities/>
        </Wrapper>
    );
};

export default HomePage