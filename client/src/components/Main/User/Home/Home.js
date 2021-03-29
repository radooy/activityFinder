import ActivitiesSection from "./AcctivitiesSection/ActivitiesSection"
import {Wrapper, Heading} from "./homeStyle"

const HomePage = () => {

    let cityName = localStorage.getItem("city");

    return(

        <Wrapper>
            <Heading>Activities in {cityName}</Heading>
            <ActivitiesSection/>
        </Wrapper>

    );
}

export default HomePage