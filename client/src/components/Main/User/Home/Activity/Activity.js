import {ActivityWrapper, Heading, InfoFor} from "./activityStyle"

const Activity = ({nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl, peopleApplied}) => {
    let detailed = false;
    return(
        <ActivityWrapper>
            <Heading>{sport}</Heading>
            {detailed && <img className="activity-img" src={imgUrl} alt="Activity"/>}   
            {detailed && <InfoFor><b>Name of creator:</b> {nameOfUser}</InfoFor>}
            <InfoFor className="preview"><b>Description:</b> {description}</InfoFor>
            <InfoFor><b>City:</b> {city}</InfoFor>
            <InfoFor><b>Date:</b> {date}</InfoFor>
            <InfoFor><b>Applied:</b> {peopleApplied}/{peopleNeeded}</InfoFor>
            {detailed && <InfoFor><b>Phone Number:</b> {phoneNumber}</InfoFor>}
        </ActivityWrapper>
    )
}

export default Activity