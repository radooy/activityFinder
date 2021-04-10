import { useContext, useEffect, useState } from "react";
import Context from "../../../../Context/Context";
import ActivitiesPreview from "../../Home/Activities/ActivitiesPreview";
import {Wrapper, Heading} from "./myActivitiesStyle";

const ActivitiesMade = () => {

    const context = useContext(Context);
    const [publications, setPublications] = useState([]);
    const id = context.id;

    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/${id}/publicationsMade`,{
            credentials:"include"
        }).then(res=>res.json())
            .then(data=>{
                if (data.message) throw data.message;
                setPublications(data.publications);
            }).catch(err=>console.log(err));
            
    },[id]);

    return(
        <Wrapper>
            {publications.length>0 && <Heading>Activities created:</Heading>}
            <ActivitiesPreview state={publications}/>
        </Wrapper>
        
    );
};

export default ActivitiesMade