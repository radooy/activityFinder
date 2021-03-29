import { useContext } from "react";
import UserContext from "../../../Context/Context";
import ActivitiesSection from "./AcctivitiesSection/ActivitiesSection"
import {Wrapper, Heading} from "./homeStyle"

const HomePage = () => {

    const userInfo = useContext(UserContext);

    return(

        <Wrapper>
            <Heading>Available activities for you, {userInfo.username}</Heading>
            <ActivitiesSection/>
        </Wrapper>

    );
}

export default HomePage