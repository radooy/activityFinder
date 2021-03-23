import SiteIntro from "../SiteIntro/SiteIntro";
import { MainContainer, ContentWrapper } from "./mainStyle";

const Main = () => {

    return (
        <MainContainer>
            <SiteIntro />
            <ContentWrapper>
                <img src="https://cdn.pixabay.com/photo/2014/05/21/15/28/soccer-349821_1280.jpg" alt="Activity" className="guest-page-image"/>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" name="username"/><br/>
                    <label for="username">Password:</label>
                    <input type="password"/><br/>
                    <input type="submit" value="Login"/>

                </form>
            </ContentWrapper>
        </MainContainer>
    );
}

export default Main;