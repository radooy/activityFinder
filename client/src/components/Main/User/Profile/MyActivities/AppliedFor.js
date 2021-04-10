import { useContext, useEffect, useState } from "react";
import Context from "../../../../Contexts/UserContext";
import ActivitiesPreview from "../../Home/Activities/ActivitiesPreview";
import {Wrapper, Heading} from "./myActivitiesStyle";

const Applied = () => {

    const context = useContext(Context);
    const [publications, setPublications] = useState([]);
    const id = context.id;

    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/${id}/publicationsApplied`,{
            credentials:"include"
        }).then(res=>res.json())
            .then(data=>{
                if (data.message) throw data.message;
                setPublications(data.publications);
            }).catch(err=>console.log(err));
            
    },[id]);

    return(
        <Wrapper>
            {publications.length>0 && <Heading>Activities applied for:</Heading>}
            <ActivitiesPreview state={publications}/>
        </Wrapper>
        
    );
};

export default Applied