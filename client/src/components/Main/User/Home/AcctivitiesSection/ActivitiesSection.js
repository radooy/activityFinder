import { useEffect, useState, useContext } from "react"
import UserContext from "../../../../Context/Context";
import Activity from "../Activity/Activity"
import {ActivitiesWrappper} from "./activitiesSectionStyle"

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
        <ActivitiesWrappper>
            {state && state.map(activity => <Activity
                key={activity._id}
                sport={activity.sport}
                description={activity.description}
                city={activity.city}
                date={activity.date}
                peopleApplied={activity.peopleApplied.length}
                peopleNeeded={activity.peopleNeeded}/>)}
        </ActivitiesWrappper>
    )
}

export default ActivitiesSection