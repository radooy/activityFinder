import { useEffect, useState } from "react";
import ActivitiesPreview from "../../Home/Activities/ActivitiesPreview";
import {Wrapper, Heading} from "./myActivitiesStyle";
import { useSelector } from "react-redux";

const Applied = () => {

    const [publications, setPublications] = useState([]);
    const id = useSelector((state) => state.user.value.id);


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