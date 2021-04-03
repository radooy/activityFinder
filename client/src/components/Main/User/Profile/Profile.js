import { useContext } from "react";
import { Route, Switch } from "react-router-dom"
import ProfileNav from "./ProfileNav/ProfileNav"
import Context from "../../../Context/Context"
import { Wrapper, Heading, Container } from "./profileStyle"
import MyPublications from "./MyPublications/MyPublications"
import Applied from "./MyPublications/AppliedFor"

const Profile = () => {

    let context = useContext(Context);
    let username = context.username;

    return (
        <Wrapper>
            <Heading>{username}'s profile</Heading>

            <Container>
                <ProfileNav />
                <Switch>
                    <Route path="/my-profile/publications-made" component={MyPublications} />
                    <Route path="/my-profile/publications-applied" component={Applied} />
                </Switch>
            </Container>


        </Wrapper>
    );
}

export default Profile