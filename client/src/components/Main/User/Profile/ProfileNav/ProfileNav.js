import { NavLink } from "react-router-dom";
import { ButtonContainer } from "./profileNavStyle";
import { Button } from "../../../mainStyle";

const ProfileNav = (props) => {

    const onBackClickHandler = ()=>{
        props.history.push("/");
    };

    return(
    <ButtonContainer>
        <NavLink activeClassName="active" to="/my-profile/activities-made"><Button className="my-activities-button">My activities</Button></NavLink>
        <NavLink to ="/my-profile/activities-applied"><Button className="my-activities-button applied-for">Activities applied</Button></NavLink>
        <Button className = "back" onClick = {onBackClickHandler}>Back</Button>
    </ButtonContainer>
    );
};

export default ProfileNav