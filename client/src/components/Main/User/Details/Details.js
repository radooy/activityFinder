import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import Activity from "../Home/Activity/Activity"
import { DetailsWrapper } from "./detailsStyle"

const Details = (props) => {
    const id = props.match.params.id;

    const [activity, setActivity] = useState({});
    const [redirect, setRedirect] = useState("");
    const [peopleApplied, setPeopleApplied] = useState(0)

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
    }, [id])

    if (redirect.length > 0) {
        return <Redirect to={redirect} />
    }

    return (
        <DetailsWrapper>
            <Activity
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
        </DetailsWrapper>

    );
}

export default Details