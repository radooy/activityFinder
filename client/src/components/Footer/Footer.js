import StyledFooter from "./footerStyle"
import { Link } from "react-router-dom"
const Footer = () => {
    return(
    <StyledFooter>
        <span><Link to="/contact-us" className="footer-link">Contact Us</Link></span>
        <span>Copyright <Link to ={{pathname:"https://github.com/radooy"}} target="_blank" className="footer-link">Radooy</Link> 2021 &copy;</span>
        <span><Link to="/about" className="footer-link">About</Link></span>
    </StyledFooter>
    );
}

export default Footer;