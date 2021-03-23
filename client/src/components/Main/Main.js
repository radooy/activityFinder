import {Switch, Route} from "react-router-dom";
import SiteIntro from "../SiteIntro/SiteIntro";
import Login from "../Forms/Login";
import Register from "../Forms/Register";
import { MainContainer, ContentWrapper } from "./mainStyle";

const Main = () => {

    return (
        <MainContainer>
            <SiteIntro />
            <ContentWrapper>
                <img src="https://cdn.pixabay.com/photo/2014/05/21/15/28/soccer-349821_1280.jpg" alt="Activity" className="guest-page-image"/>
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login} />
                </Switch>
            </ContentWrapper>
        </MainContainer>
    );
}

export default Main;