import { useEffect, useState, useContext } from "react";
import UserContext from "../../../../Context/Context";
import ActivitiesPreview from "./ActivitiesPreview";

const AllActivities = () => {

    const [state, setState] = useState([]);

    const userInfo = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:5000/api/publications", {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) throw data.message;
                setState(data.publications)
            })
            .catch(err => {
                console.log(err)
            })
    }, [userInfo]);


    return (
        <ActivitiesPreview state={state}/>
    );
};

export default AllActivities