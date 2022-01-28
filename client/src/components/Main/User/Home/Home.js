import AllActivities from "./Activities/AllActivities";
import { Wrapper, Heading } from "./homeStyle";
import { useSelector } from "react-redux";

const HomePage = () => {
    const username = useSelector((state) => state.user.value.username);

    return(
        <Wrapper>
            <Heading>Available activities for you, {username}</Heading>
            <AllActivities/>
        </Wrapper>
    );
};

export default HomePage