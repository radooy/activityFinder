import { Switch, Route } from "react-router-dom";
import SiteIntroHead from "./SiteIntro/SiteIntroHead";
import SiteIntroBody from "./SiteIntro/SiteIntroBody";
import LoginForm from "../../Forms/LoginForm";
import RegisterForm from "../../Forms/RegisterForm";
import About from "../../About/About"
import { ContentWrapper } from "./guestStyle"

const GuestPage = () => {
    return (

        //Header

    <>
        <SiteIntroHead />
        <ContentWrapper>
            <img src="https://cdn.pixabay.com/photo/2014/05/21/15/28/soccer-349821_1280.jpg" alt="Activity" className="guest-page-image" />
            <Switch>
                <Route exact path="/" component={SiteIntroBody} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/about" component={About}/>
            </Switch>
        </ContentWrapper>
    </>

        //Footer
    );

}

export default GuestPage;