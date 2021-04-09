import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Context from "../../../Context/Context";
import Activity from "../Home/Activity/Activity";
import { DetailsWrapper} from "./detailsStyle";
import { Button } from "../../mainStyle";
import toast from "react-hot-toast";
import ErrorPage from "../../../404/ErrorPage";

const Details = (props) => {
    const id = props.match.params.id;

    const [activity, setActivity] = useState({});
    const [redirect, setRedirect] = useState("");
    const [peopleApplied, setPeopleApplied] = useState(0);
    const [visible, setVisible] = useState(false);
    const [isCreator, setCreator] = useState(false);
    const [notFound, setNotFound] = useState(false);

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
                };

                if (data.publication.creator.toString()===context.id) {
                    setCreator(true);
                };

                setActivity(data.publication);
                setPeopleApplied(data.publication.peopleApplied.length);
            })
            .catch(err =>{
                console.log(err);
                setNotFound(true);
            });
    }, [context.id, id]);

    const onApplyHandler = ()=>{
        fetch(`http://localhost:5000/api/publications/${id}/apply`,{
            method:"PATCH",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.message) throw data.message;
            toast.success("Applied!",{
                duration: 2000
            });
            setPeopleApplied(peopleApplied+1);
            setVisible(true);
        })
        .catch(err=>console.log(err));
    };

    const onUnapplyHandler = ()=>{
        fetch(`http://localhost:5000/api/publications/${id}/unapply`,{
            method:"PATCH",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.message) throw data.message
            toast.error("Unapplied!",{
                duration: 2000,
            });
            setPeopleApplied(peopleApplied-1);
            setVisible(false);
        })
        .catch(err=>console.log(err));
    };

    const onEditHandler = ()=>{
        setRedirect(`/edit/${id}`);
    };

    const onDeleteHandler = ()=>{
        fetch(`http://localhost:5000/api/publications/${id}`,{
            method:"DELETE",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.message) throw data.message;
            toast.success(`Activity deleted successfully!`);
            setRedirect("/");
        })
        .catch(err=>console.log(err));
    };

    const onBackClickHandler = ()=>{
        props.history.goBack();
    };


    if (redirect.length > 0) {
        return <Redirect to={redirect} />
    };

    if (notFound){
        return <ErrorPage/>
    };

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
            {isCreator ? <> <Button className="edit-btn" onClick={onEditHandler}>Edit</Button>
                        <Button className="delete-btn" onClick={onDeleteHandler}>Delete</Button></>
                        : <>{peopleApplied<activity.peopleNeeded && <Button className="apply-btn" style={{display: !visible ? "inline" : "none"}} onClick={onApplyHandler}>Apply</Button>}
                        <Button className="delete-btn unapply-btn" style={{display: visible ? "inline" : "none"}} onClick={onUnapplyHandler}>Unapply</Button></>}
            
            <Button className="back-btn" onClick={onBackClickHandler}>Back</Button>
        </DetailsWrapper>
    );
};

export default Details