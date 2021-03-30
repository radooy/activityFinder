import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import Activity from "../Home/Activity/Activity"
import { DetailsWrapper, Button } from "./detailsStyle"

const Details = (props) => {
    const id = props.match.params.id;

    const [activity, setActivity] = useState({});
    const [redirect, setRedirect] = useState("");
    const [peopleApplied, setPeopleApplied] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/api/publications/${id}`, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) throw data.message;
                setActivity(data.publication);
                setPeopleApplied(data.publication.peopleApplied.length);
            })
            .catch(err => {
                console.log(err)
                setRedirect("/error");
            })
    }, []);

    const onClickHandler = ()=>{
        fetch(`http://localhost:5000/api/publications/${id}/apply`,{
            method:"PATCH",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.message) throw data.message
            setPeopleApplied(peopleApplied+1);
            console.log(peopleApplied)
            console.log(data);
        })
        .catch(err=>console.log(err));
    }

    const onBackClickHandler = ()=>{
        props.history.goBack();
    }


    if (redirect.length > 0) {
        return <Redirect to={redirect} />
    }

    return (
        <DetailsWrapper>
            <Activity
                id={id}
                detailed={true}
                nameOfUser={activity.nameOfUser}
                sport={activity.sport}
                description={activity.description}
                city={activity.city}
                date={activity.date}
                peopleApplied={peopleApplied}
                peopleNeeded={activity.peopleNeeded}
                imgUrl={activity.imgUrl}
                phoneNumber={activity.phoneNumber}
            />
            <Button onClick={onClickHandler}>Apply</Button>
            <Button onClick={onBackClickHandler}>Back</Button>
        </DetailsWrapper>
    );
}

export default Details