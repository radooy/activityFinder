import { useContext } from "react";
import UserContext from "../../../Context/Context";
import ActivitiesSection from "./AcctivitiesSection/ActivitiesSection"
import {Wrapper, Heading} from "./homeStyle"
import Filter from "./Filter/Filter"

const HomePage = () => {

    const userInfo = useContext(UserContext);

    return(

        <Wrapper>
            <Heading>Available activities for you, {userInfo.username}</Heading>
            <Filter/>
            <ActivitiesSection/>
        </Wrapper>

    );
}

export default HomePage