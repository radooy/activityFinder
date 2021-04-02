import { useContext } from "react";
import { Route, Switch } from "react-router-dom"
import ProfileNav from "./ProfileNav/ProfileNav"
import Context from "../../../Context/Context"
import { Wrapper, Heading, Container } from "./profileStyle"
import MyPublications from "./MyPublications/MyPublications"

const Profile = () => {

    let context = useContext(Context);
    let username = context.username;

    return (
        <Wrapper>
            <Heading>{username}'s profile</Heading>

            <Container>
                <ProfileNav />
                <Switch>
                    <Route path="/my-profile/publications" component={MyPublications} />
                </Switch>
            </Container>


        </Wrapper>
    );
}

export default Profile