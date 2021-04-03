import { Link} from "react-router-dom"
import { ButtonContainer } from "./profileNavStyle"

import { Button } from "../../../mainStyle"

const ProfileNav = () => {
    return(
    <ButtonContainer>
        <Link to="/my-profile/publications-made"><Button className="my-publications-button">My publications</Button></Link>
        <Link to ="/my-profile/publications-applied"><Button className="my-publications-button applied-for">Publications applied</Button></Link>
    </ButtonContainer>
    )
}

export default ProfileNav