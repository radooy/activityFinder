import ActivityForm from "../../../Forms/ActivityForm";
import { Button } from "../../mainStyle";

const CreatePage = (props) => {

    const onBackClickHandler = ()=>{
        props.history.goBack();
    }

    return(
        <div>
            <Button onClick={onBackClickHandler}>Back</Button>
            <ActivityForm/>
        </div>
    );
};

export default CreatePage