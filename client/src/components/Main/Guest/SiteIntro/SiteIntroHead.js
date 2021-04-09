import { IntroContainer, Heading, Paragraph } from "./siteIntroStyle";
import { Link } from "react-router-dom";
import { welcomeGuestHeading } from "../../../../utils/plainText";

const SiteIntro = () => {
    return (
        <IntroContainer>
            <Heading>{welcomeGuestHeading}</Heading>
            <Paragraph>
                New in town? Don't know anybody? Love to sport? We are here for you!<br />
                    <Link to="/register" className="paragraph-link">
                    Create a free account</Link> and join our community!<br/>
                <br/>
                Already got an account?<br/>
                Click <Link to="/login" className="paragraph-link">
                        here 
                        </Link> to sign in and discover all the published activities!
            </Paragraph>
        </IntroContainer>
    );
};

export default SiteIntro