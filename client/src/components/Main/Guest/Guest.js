import { Switch, Route } from "react-router-dom";
import SiteIntroHead from "../../SiteIntro/SiteIntroHead";
import SiteIntroBody from "../../SiteIntro/SiteIntroBody";
import Login from "../../Forms/Login";
import Register from "../../Forms/Register";
import { ContentWrapper } from "./guestStyle"

const Guest = () => {
    return (
    <>
        <SiteIntroHead />
        <ContentWrapper>
            <img src="https://cdn.pixabay.com/photo/2014/05/21/15/28/soccer-349821_1280.jpg" alt="Activity" className="guest-page-image" />
            <Switch>
                <Route exact path="/" component={SiteIntroBody} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </ContentWrapper>
    </>
    );

}

export default Guest;