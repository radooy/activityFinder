import { Route, Switch } from "react-router-dom";
import ProfileNav from "./ProfileNav/ProfileNav";
import { Wrapper, Heading, Container } from "./profileStyle";
import ActivitiesMade from "./MyActivities/ActivitiesMade";
import Applied from "./MyActivities/AppliedFor";
import ErrorPage from "../../../404/ErrorPage";
import { useSelector } from "react-redux";


const Profile = (props) => {
    const username = useSelector((state) => state.user.value.username);

    if (props.location.pathname!=="/my-profile" &&
        props.location.pathname!=="/my-profile/activities-made" &&
        props.location.pathname!=="/my-profile/activities-applied") {
        return <ErrorPage/>
    };

    return (
        <Wrapper>
            <Heading>{username}'s profile</Heading>
            <Container>
                <ProfileNav {...props} />
                <Switch>
                    <Route path="/my-profile/activities-made" component={ActivitiesMade} />
                    <Route path="/my-profile/activities-applied" component={Applied} />
                </Switch>
            </Container>
        </Wrapper>
    );
};

export default Profile