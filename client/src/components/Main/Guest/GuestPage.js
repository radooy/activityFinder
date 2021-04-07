import { Switch, Route } from "react-router-dom";
import SiteIntroHead from "./SiteIntro/SiteIntroHead";
import SiteIntroBody from "./SiteIntro/SiteIntroBody";
import LoginForm from "../../Forms/LoginForm";
import RegisterForm from "../../Forms/RegisterForm";
import { ContentWrapper } from "./guestStyle"
import ErrorPage from "../../404/ErrorPage"

const GuestPage = (props) => {
    
    //monkey code
    if (props.location.pathname!=="/" && props.location.pathname!=="/login" && props.location.pathname!=="/register" && props.location.pathname!=="/about") {
        return <ErrorPage/>;
    }

    return (
    <>
        <SiteIntroHead />
        <ContentWrapper>
            <img src="https://cdn.pixabay.com/photo/2014/05/21/15/28/soccer-349821_1280.jpg" alt="Activity" className="guest-page-image" />
            <Switch>
                <Route exact path="/" component={SiteIntroBody} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={LoginForm} />
            </Switch>
        </ContentWrapper>
    </>
    );

}

export default GuestPage;