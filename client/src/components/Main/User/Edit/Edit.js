import { Heading } from "./editStyle"
import ActivityForm from "../../../Forms/ActivityForm"
import { Button } from "../../mainStyle";

const Edit = (props)=>{
    const id = props.match.params.id;
    const onBackClickHandler = ()=>{
        props.history.goBack();
    }

    return (
        <>
        <Button onClick={onBackClickHandler}>Back</Button>
        <Heading>Edit your publication</Heading>
        <ActivityForm id={id} buttonName="Edit" />
        </>
    );
}

export default Edit