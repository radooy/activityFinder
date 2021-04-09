import {ActivityWrapper, Heading, InfoFor} from "./activityStyle";

const Activity = ({detailed, nameOfUser, sport, date, description, peopleNeeded, city, phoneNumber, imgUrl, peopleApplied}) => {
    
    
    return(
        <ActivityWrapper display={detailed ? "flex" : "grid"}>
            {detailed ? <>
                
            <div className="flex">
                <Heading>{sport}</Heading>
                <InfoFor><b>Name of creator:</b> {nameOfUser}</InfoFor>
                <InfoFor><b>Description:</b> {description}</InfoFor>
                <InfoFor><b>City:</b> {city}</InfoFor>
                <InfoFor><b>Date:</b> {date}</InfoFor>
                <InfoFor><b>Applied:</b> {peopleApplied}/{peopleNeeded}</InfoFor>
                <InfoFor><b>Phone number:</b> {phoneNumber}</InfoFor>
            </div>
            <img className="activity-img" src={imgUrl} alt="Activity"/>
            </> : <>
            <Heading>{sport}</Heading>
            <InfoFor><b>City:</b> {city}</InfoFor>
            <InfoFor><b>Date:</b> {date}</InfoFor>
            <InfoFor><b>Applied:</b> {peopleApplied}/{peopleNeeded}</InfoFor>
            </>
            }
        </ActivityWrapper>
    );
};

export default Activity