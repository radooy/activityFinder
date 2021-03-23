import { Heading, Paragraph } from "./siteIntroStyle";
import { Link } from "react-router-dom";

const SiteIntro = () => {
    return (
        <>
            <Heading> Welcome to Activity-Finder!</Heading>
            <Paragraph>New in town? Don't know anybody? Love to sport? We are here for you!<br /> <Link to="/register" className="paragraph-link">Create a free account </Link> and join our community! </Paragraph>
        </>
    );
}

export default SiteIntro