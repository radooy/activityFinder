import { Link } from "react-router-dom"
import Activity from "../Activity/Activity"
import { ActivitiesWrappper, NoActivitiesDiv } from "./activitiesSectionStyle"

const ActivityPresentation = (props)=>{
    return(
        <ActivitiesWrappper display={props.state.length === 0 ? "block" : "grid"}>
            {props.state.length > 0 ? props.state.map(activity =>

                <div key={activity._id} className="not-detailed">

                    <Link to={`/details/${activity._id}`} className="details-link">
                        <Activity
                            detailed={false}
                            sport={activity.sport}
                            description={activity.description}
                            city={activity.city}
                            date={activity.date}
                            peopleApplied={activity.peopleApplied.length}
                            peopleNeeded={activity.peopleNeeded}
                        />
                    </Link>

                </div>
                
                ): <NoActivitiesDiv>There are currently no activities to show!</NoActivitiesDiv>}
        </ActivitiesWrappper>
    );
}

export default ActivityPresentation