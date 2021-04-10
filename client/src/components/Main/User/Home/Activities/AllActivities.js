import { useEffect, useState } from "react";
import ActivitiesPreview from "./ActivitiesPreview";

const AllActivities = () => {
    const [state, setState] = useState([]);

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
    }, []);

    return (
        <ActivitiesPreview state={state}/>
    );
};

export default AllActivities