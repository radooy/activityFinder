import { Heading } from "./editStyle"
import CreateForm from "../../../Forms/CreateForm"

const Edit = (props)=>{
    const id = props.match.params.id;

    return (
        <>
        <Heading>Edit your publication</Heading>
        <CreateForm id={id} buttonName="Edit" />
        </>
    );
}

export default Edit