import { useContext, useEffect, useState } from "react"
import Context from "../../../../Context/Context"
import ActivityPresentation from "../../Home/AcctivitiesSection/ActivitiesPresentation"
import {Wrapper, Heading} from "./myPublicationsStyle"

const MyPublications = () => {

    const context = useContext(Context);
    let [publications, setPublications] = useState([]);
    let id = context.id;

    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/${id}/publicationsMade`,{
            credentials:"include"
        }).then(res=>res.json())
            .then(data=>{
                if (data.message) throw data.message
                setPublications(data.publications)
            }).catch(err=>console.log(err))
            
    },[id])

    return(
        <Wrapper>
            {publications.length>0 && <Heading>Activities created:</Heading>}
            <ActivityPresentation state={publications}/>
        </Wrapper>
        
    )
}

export default MyPublications