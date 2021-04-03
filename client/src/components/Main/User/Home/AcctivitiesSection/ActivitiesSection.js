import { useEffect, useState, useContext } from "react"
import UserContext from "../../../../Context/Context";
import ActivityPresentation from "./ActivitiesPresentation"

const ActivitiesSection = () => {

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
    }, [userInfo])


    return (
        <ActivityPresentation state={state}/>
    )
}

export default ActivitiesSection