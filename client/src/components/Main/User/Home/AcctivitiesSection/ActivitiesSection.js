import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../../../../Context/Context";
import Activity from "../Activity/Activity"
import {ActivitiesWrappper, NoActivitiesDiv} from "./activitiesSectionStyle"

const ActivitiesSection = () => {

    const [state, setState] = useState([]);
    const userInfo = useContext(UserContext);

    useEffect(()=>{
        fetch("http://localhost:5000/api/publications",{
            credentials:"include"
        })
            .then(res=> res.json())
            .then(data=>{
                if (data.message) throw data.message;
                setState(data.publications)
            })
            .catch(err=>{
                userInfo.logOut();
                console.log(err)
            })
    },[userInfo])


    return(
        <ActivitiesWrappper display = {state.length===0 ? "block" : "grid"}>
            {state.length>0 ? state.map(activity =>
            <>
            <Link to={`/details/${activity._id}`} className="details-link">
            <Activity
                key={activity._id}
                sport={activity.sport}
                description={activity.description}
                city={activity.city}
                date={activity.date}
                peopleApplied={activity.peopleApplied.length}
                peopleNeeded={activity.peopleNeeded}
            /> 
            </Link>
            
            </>):<NoActivitiesDiv>There are currently no activities to show!</NoActivitiesDiv>}
        </ActivitiesWrappper>
    )
}

export default ActivitiesSection