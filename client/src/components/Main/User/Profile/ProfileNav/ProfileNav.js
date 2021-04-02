import { Link} from "react-router-dom"
import { ButtonContainer } from "./profileNavStyle"

import { Button } from "../../../mainStyle"

const ProfileNav = () => {
    return(
    <ButtonContainer>
        <Link to="/my-profile/publications"><Button className="my-publications-button">My publications</Button></Link>
        <Button className="my-publications-button change-password">Change profile information</Button>
    </ButtonContainer>
    )
}

export default ProfileNav