import { useState, useEffect, useContext } from "react"
import { Redirect } from "react-router-dom"
import Context from "../../../Context/Context"
import Activity from "../Home/Activity/Activity"
import { DetailsWrapper, Button } from "./detailsStyle"

const Details = (props) => {
    const id = props.match.params.id;

    const [activity, setActivity] = useState({});
    const [redirect, setRedirect] = useState("");
    const [peopleApplied, setPeopleApplied] = useState(0);
    const [visible, setVisible] = useState(false);
    const [isCreator, setCreator] = useState(false);


    const context = useContext(Context);

    useEffect(() => {
        fetch(`http://localhost:5000/api/publications/${id}`, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) throw data.message;

                if (data.publication.peopleApplied.includes(context.id)) {
                    setVisible(true);
                }

                if (data.publication.creator.toString()===context.id) {
                    setCreator(true);
                }

                setActivity(data.publication);
                setPeopleApplied(data.publication.peopleApplied.length);
            })
            .catch(err => {
                console.log(err)
                setRedirect("/error");
            })
    }, []);

    const onApplyHandler = ()=>{
        fetch(`http://localhost:5000/api/publications/${id}/apply`,{
            method:"PATCH",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.message) throw data.message;
            setPeopleApplied(peopleApplied+1);
            setVisible(true);
        })
        .catch(err=>console.log(err));
    }

    const onUnapplyHandler = ()=>{
        fetch(`http://localhost:5000/api/publications/${id}/unapply`,{
            method:"PATCH",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.message) throw data.message
            setPeopleApplied(peopleApplied-1);
            setVisible(false);
        })
        .catch(err=>console.log(err));
    }

    const onEditHandler = ()=>{
        setRedirect(`/edit/${id}`)
    }

    const onDeleteHandler = ()=>{
        fetch(`http://localhost:5000/api/publications/${id}`,{
            method:"DELETE",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.message) throw data.message
            setRedirect("/")
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
            {isCreator ? <> <Button onClick={onEditHandler}>Edit</Button>
                        <Button onClick={onDeleteHandler}>Delete</Button></>
                        : <><Button style={{display: !visible ? "inline" : "none"}} onClick={onApplyHandler}>Apply</Button>
                        <Button style={{display: visible ? "inline" : "none"}} onClick={onUnapplyHandler}>Unapply</Button></>}
            
            <Button onClick={onBackClickHandler}>Back</Button>
        </DetailsWrapper>
    );
}

export default Details