import { useContext, useEffect, useState } from "react"
import Context from "../../../../Context/Context"
import ActivityPresentation from "../../Home/AcctivitiesSection/ActivitiesPresentation"
import {Wrapper} from "./myPublicationsStyle"

const Applied = () => {

    const context = useContext(Context);
    let [publications, setPublications] = useState([]);
    let id = context.id;

    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/${id}/publicationsApplied`,{
            credentials:"include"
        }).then(res=>res.json())
            .then(data=>{
                if (data.message) throw data.message
                setPublications(data.publications)
            }).catch(err=>console.log(err))
            
    },[])

    return(
        <Wrapper>
            <ActivityPresentation state={publications}/>
        </Wrapper>
        
    )
}

export default Applied