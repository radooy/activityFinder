import StyledFooter from "./footerStyle";
import { Link } from "react-router-dom";
const Footer = () => {
    const year = new Date().getFullYear();
    
    return(
    <StyledFooter>
        <span>Copyright <Link to ={{pathname:"https://github.com/radooy"}} target="_blank" className="footer-link">Radooy</Link> {year} &copy;</span>
        <span><Link to="/about" className="footer-link">About</Link></span>
    </StyledFooter>
    );
};

export default Footer