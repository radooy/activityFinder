import { useEffect, useState } from "react"
import Activity from "../Activity/Activity"
import {ActivitiesWrappper} from "./activitiesSectionStyle"

const ActivitiesSection = () => {
    const [state, setState] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/api/publications")
            .then(res=> res.json())
            .then(data=>{
                setState(data.publications)
            })
    },[])


    return(
        <ActivitiesWrappper>
            {state.map(activity => <Activity
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