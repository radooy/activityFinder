import { useEffect, useState } from "react"
import Activity from "../Activity/Activity"
import {ActivitiesWrappper} from "./activitiesSectionStyle"

const ActivitiesSection = () => {
    const [state, setState] = useState([]);

    console.log(state);
    useEffect(()=>{
        fetch("http://localhost:5000/api/publications",{
            credentials:"include"
        })
            .then(res=> res.json())
            .then(data=>{
                if (data.message) throw data.message;
                setState(data.publications)
            })
            .catch(err=>console.log(err))
    },[])


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