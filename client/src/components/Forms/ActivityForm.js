import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle";
import { Error } from "../Main/mainStyle";
import { fetcher } from "../../utils/helpers";
import { validation } from "../../utils/plainText";

function ActivityForm(props) {
    const [state, setState] = useState({
        nameOfUser: "",
        sport: "Football",
        date: null,
        description: "",
        peopleNeeded: 1,
        phoneNumber: "",
        imgUrl: "",
        city: "Sofia",
        redirect: null,
        dateFromPublication: "",
        errors: {}
    });

    const cities = useSelector((state) => state.data.value.cities);
    const sports = useSelector((state) => state.data.value.sports);

    useEffect(() => {
        if (props.id) {
            fetch(`http://localhost:5000/api/publications/${props.id}`)
                .then(res => res.json())
                .then(data => {
                    setState((prevState) => ({
                        ...prevState,
                        nameOfUser: data.publication.nameOfUser,
                        date: data.publication.date,
                        description: data.publication.description,
                        peopleNeeded: Number(data.publication.peopleNeeded),
                        phoneNumber: data.publication.phoneNumber,
                        imgUrl: data.publication.imgUrl,
                        dateFromPublication: data.publication.date
                    }));
                }).catch(err => console.log(err));
        };
    }, []);

    const validateForm = () => {
        const { nameOfUser, date, description, peopleNeeded, phoneNumber, imgUrl } = state;
        const message = validation.activity;
        let errors = {};
        let isValid = true;

        if ((nameOfUser.trim().length === 0) || /^([A-Z]{1})([a-z])+ ([A-Z]{1})([a-z])+$/.test(nameOfUser) === false) {
            errors.nameOfUser = message.nameOfUser;
        };

        if (!date) {
            errors.date = message.date;
        };

        if (description.trim().length < 8 || description.length > 200) {
            errors.descriptionLength = message.descriptionLength;
        };

        if (/^[a-zA-Z0-9 .!?"-]{8,200}$/.test(description) === false) {
            errors.descriptionChars = message.descroptionChars;
        };

        if (Number(peopleNeeded) < 1 || Number(peopleNeeded) > 20) {
            errors.peopleNeeded = message.peopleNeeded;
        };

        if ((phoneNumber.trim().length !== 10) || /^[0]{1}[0-9]{9}$/.test(phoneNumber) === false) {
            errors.phoneNumber = message.phoneNumber;
        };

        if ((imgUrl.trim().length === 0) || /^https?:\/\/(.*)$/.test(imgUrl) === false) {
            errors.imgUrl = message.imgUrl;
        };

        setState((prevState) => ({
            ...prevState,
            errors
        }));

        if (Object.keys(errors).length > 0) {
            toast.error(message.error);
            isValid = false;
        };

        return isValid;
    };

    const onFocusHandler = () => {
        setState((prevState) => ({
            ...prevState,
            errors: {}
        }));
    };

    const onChangeHandler = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        const { nameOfUser, sport, date, description, phoneNumber, city, imgUrl } = state;
        const peopleNeeded = Number(state.peopleNeeded);
        const endpoint = props.id ? `/publications/${props.id}` : "/publications/create";
        const typeOfRequest = props.id ? "PATCH" : "POST";
        const redirect = props.id ? `/details/${props.id}` : "/";
        const toastMessage = props.id ? 'Activity successfully updated!' : 'Activity successfully created!';
        const icon = props.id ? "👏" : "🏆";

        isValid && fetcher(endpoint, typeOfRequest, { nameOfUser, sport, date, description, phoneNumber, city, imgUrl, peopleNeeded })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                toast.success(toastMessage, {
                    icon
                });
                console.log('Success:', data);
                setState({
                    redirect
                })
            }).catch(err => console.log(err));
    };

    if (state.redirect) {
        return <Redirect to={state.redirect} />
    };

    const fontSize = "13px";
    const errors = state.errors;

    return (
        <Wrapper>
            <Form onSubmit={onSubmitHandler}>
                <Label htmlFor="nameOfUser">First and last name of creator:</Label>
                <Input type="text" name="nameOfUser" id="nameOfUser" placeholder="Example Example"
                    defaultValue={state.nameOfUser}
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.nameOfUser && <Error fontSize={fontSize}>{errors.nameOfUser}</Error>}

                <Label htmlFor="description">About the activity:</Label>
                <Input type="text" name="description" id="description" placeholder="exact location etc."
                    defaultValue={state.description}
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.descriptionChars && <Error fontSize={fontSize}>{errors.descriptionChars}</Error>}
                {errors.descriptionLength && <Error fontSize={fontSize}>{errors.descriptionLength}</Error>}

                <Label htmlFor="date">Date:</Label>
                {props.dateInfoNeeded && <div>If you don't want to select a new date it will remain: {state.dateFromPublication}</div>}
                <Input type="datetime-local" name="date" id="date"
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.date && <Error fontSize={fontSize}>{errors.date}</Error>}

                <Label htmlFor="peopleNeeded">People needed:</Label>
                <Input type="number" min="1" max="20" name="peopleNeeded" id="peopleNeeded"
                    value={state.peopleNeeded}
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.peopleNeeded && <Error fontSize={fontSize}>{errors.peopleNeeded}</Error>}

                <Label htmlFor="sport">Choose sport:</Label>
                <Select name="sport" id="sport"
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler}>
                    {sports.map((sport) => <option key={sport} value={sport}> {sport} </option>)}
                </Select>

                <Label htmlFor="city">Choose your city:</Label>
                <Select name="city" id="city"
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler}>
                    {cities.map((city) => <option key={city} value={city}> {city} </option>)}
                </Select>

                <Label htmlFor="phoneNumber">Phone number:</Label>
                <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="0800000000"
                    defaultValue={state.phoneNumber}
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.phoneNumber && <Error fontSize={fontSize}>{errors.phoneNumber}</Error>}

                <Label htmlFor="imgUrl">Image Url:</Label>
                <Input type="text" name="imgUrl" id="imgUrl" placeholder="http://example"
                    defaultValue={state.imgUrl}
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.imgUrl && <Error fontSize={fontSize}>{errors.imgUrl}</Error>}

                <Submit className="activity-submit" value={props.buttonName || "Create"} />
            </Form>
        </Wrapper>
    )
}

export default ActivityForm
