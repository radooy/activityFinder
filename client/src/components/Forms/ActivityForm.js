import { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle";
import { Error } from "../Main/mainStyle";
import toast from "react-hot-toast";

class ActivityForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameOfUser: "",
            sport: "Football",
            date: null,
            description: "",
            peopleNeeded: 1,
            phoneNumber: "",
            imgUrl: "",
            city: "Sofia",
            cities: [],
            sports: [],
            redirect: null,
            errors: {}
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onEditHandler = this.onEditHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    };

    validateForm(){
        const { nameOfUser, date, description, peopleNeeded, phoneNumber, imgUrl } = this.state;
        let errors = {};
        let isValid = true;

        if ((nameOfUser.trim().length===0) || /^([A-Z]{1})([a-z])+ ([A-Z]{1})([a-z])+$/.test(nameOfUser)===false){
            errors.nameOfUser = "User's first and last name field is required and both should start with capital letter followed by lowercase letters and a single space between first and last name!";
        };

        if (!date){
            errors.date = "Please select a date!";
        };

        if (description.trim().length<8 || description.length>200) {
            errors.descriptionLength = "Description must be between 8 and 200 symbols!";
        };

        if (/^[a-zA-Z0-9 .!?"-]{8,200}$/.test(description)===false) {
            errors.descriptionChars = "Description can contain only latin letters, numbers,spaces and '!', '?','-' signs!";
        };

        if (Number(peopleNeeded)<1 || Number(peopleNeeded)>20){
            errors.peopleNeeded = "Please select a number between 1 and 20!";
        };

        if ((phoneNumber.trim().length!==10) || /^[0]{1}[0-9]{9}$/.test(phoneNumber)===false){
            errors.phoneNumber = "Phone number must be exactly 10 numbers and should start with '0' !";
        };

        if ((imgUrl.trim().length===0) || /^https?:\/\/(.*)$/.test(imgUrl)===false) {
            errors.imgUrl = "Please enter a valid url! URL should start with either http:// or https://";
        };

        this.setState({
            errors
        });

        if (Object.keys(errors).length>0){
            toast.error("Please fill the form with valid data!");
            isValid = false;
        };
        return isValid;
    };

    onFocusHandler(){
        this.setState({
            errors:{}
        });
    };

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmitHandler(e) {
        e.preventDefault();
        let isValid = this.validateForm();

        isValid && fetch("http://localhost:5000/api/publications/create", {
            credentials: "include",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nameOfUser: this.state.nameOfUser,
                sport: this.state.sport,
                date: this.state.date,
                description: this.state.description,
                peopleNeeded: Number(this.state.peopleNeeded),
                phoneNumber: this.state.phoneNumber,
                city: this.state.city,
                imgUrl: this.state.imgUrl
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                toast.success('Activity successfully created!');
                console.log('Success:', data);
                this.setState({
                    redirect: "/"
                });

            }).catch(err => console.log(err));
    };

    onEditHandler(e){
        e.preventDefault();
        let isValid = this.validateForm();
        
        isValid && fetch(`http://localhost:5000/api/publications/${this.props.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                nameOfUser: this.state.nameOfUser,
                sport: this.state.sport,
                date: this.state.date,
                description: this.state.description,
                peopleNeeded: Number(this.state.peopleNeeded),
                phoneNumber: this.state.phoneNumber,
                city: this.state.city,
                imgUrl: this.state.imgUrl,
                dateFromPublication:null
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                toast.success('Activity successfully updated!');
                console.log('Success:', data);
                this.setState({
                    redirect:`/details/${this.props.id}`
                })
            }).catch(err => console.log(err));
    };


    componentDidMount() {
        fetch("http://localhost:5000/api/utils/cities")
            .then(res => res.json())
            .then((data) => {
                this.setState({ cities: data.cities })
            }).catch(err => console.log(err));

        fetch("http://localhost:5000/api/utils/sports")
            .then(res => res.json())
            .then((data) => {
                this.setState({ sports: data.sports })
            }).catch(err => console.log(err));

        if(this.props.id){
            fetch(`http://localhost:5000/api/publications/${this.props.id}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        nameOfUser:data.publication.nameOfUser,
                        date: data.publication.date,
                        description: data.publication.description,
                        peopleNeeded: Number(data.publication.peopleNeeded),
                        phoneNumber: data.publication.phoneNumber,
                        imgUrl: data.publication.imgUrl,
                        dateFromPublication: data.publication.date
                    })
                }).catch(err=>console.log(err));
        };
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        };
        let fontSize = "17px";
        let errors = this.state.errors;
        return (
            <Wrapper>
                <Form onSubmit={this.props.id ? this.onEditHandler : this.onSubmitHandler}>
                    <Label htmlFor="nameOfUser">First and last name of creator:</Label>
                    <Input type="text" name="nameOfUser" id="nameOfUser" placeholder="Example Example" 
                        defaultValue={this.state.nameOfUser}
                        onFocus={this.onFocusHandler} 
                        onChange={this.onChangeHandler} />
                    {errors.nameOfUser && <Error fontSize={fontSize}>{errors.nameOfUser}</Error>}

                    <Label htmlFor="description">About the activity:</Label>
                    <Input type="text" name="description" id="description" placeholder="exact location etc."
                        defaultValue={this.state.description}
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.descriptionChars && <Error fontSize={fontSize}>{errors.descriptionChars}</Error>}
                    {errors.descriptionLength && <Error fontSize={fontSize}>{errors.descriptionLength}</Error>}

                    <Label htmlFor="date">Date:</Label>
                    {this.props.info && <div>If you don't want to select a new date it will remain: {this.state.dateFromPublication}</div>}
                    <Input type="datetime-local" name="date" id="date"
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.date && <Error fontSize={fontSize}>{errors.date}</Error>}

                    <Label htmlFor="peopleNeeded">People needed:</Label>
                    <Input type="number" min="1" max="20" name="peopleNeeded" id="peopleNeeded"
                        value={this.state.peopleNeeded}
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.peopleNeeded && <Error fontSize={fontSize}>{errors.peopleNeeded}</Error>}

                    <Label htmlFor="sport">Choose sport:</Label>
                    <Select name="sport" id="sport"
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}>
                        {this.state.sports.map((sport) => <option key={sport} value={sport}> {sport} </option>)}
                    </Select>

                    <Label htmlFor="city">Choose your city:</Label>
                    <Select name="city" id="city"
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}>
                        {this.state.cities.map((city) => <option key={city} value={city}> {city} </option>)}
                    </Select>

                    <Label htmlFor="phoneNumber">Phone number:</Label>
                    <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="0800000000"
                        defaultValue={this.state.phoneNumber}
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.phoneNumber && <Error fontSize={fontSize}>{errors.phoneNumber}</Error>}

                    <Label htmlFor="imgUrl">Image Url:</Label>
                    <Input type="text" name="imgUrl" id="imgUrl" placeholder="http://example"
                        defaultValue={this.state.imgUrl}
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.imgUrl && <Error fontSize={fontSize}>{errors.imgUrl}</Error>}

                    <Submit className="activity-submit" value={this.props.buttonName || "Create"} />
                </Form>
            </Wrapper>
        );
    };
};

export default ActivityForm