import { Link } from "react-router-dom";
import { ErrorImage, Wrapper, Button } from "./errorPageStyle";

const ErrorPage = ()=>{
    return(
        <Wrapper>
            <ErrorImage src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="404"/>
            <Link to="/"><Button>Home page</Button></Link>
        </Wrapper>
        
    );
};

export default ErrorPage