import { Component } from "react"
import {Redirect} from "react-router-dom"
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle"

class CreateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameOfUser: "",
            sport: "Football",
            date: null,
            description: "",
            peopleNeeded: 0,
            phoneNumber: "",
            imgUrl: "",
            city: "Sofia",
            cities: [],
            sports: [],
            redirect: null
        }
    }

    onChangeHandler(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler(e) {
        e.preventDefault();

        fetch("http://localhost:5000/api/publications/create", {
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
                console.log('Success:', data);
                this.setState({
                    ...this.state,
                    redirect: "/"
                });

            })
            .catch(err => {
                console.log(err);
            });
    }


    componentDidMount() {
        fetch("http://localhost:5000/api/utils/cities")
            .then(res => res.json())
            .then((data) => {
                this.setState({ cities: data.cities })
            })
            .catch(err => console.log(err));

        fetch("http://localhost:5000/api/utils/sports")
            .then(res => res.json())
            .then((data) => {
                this.setState({ sports: data.sports })
            })
            .catch(err => console.log(err));
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to= {this.state.redirect}/>
        }
        return (
            <Wrapper>
                <Form onSubmit={this.onSubmitHandler.bind(this)}>
                    <Label htmlFor="nameOfUser">Name of creator:</Label>
                    <Input type="text" name="nameOfUser" id="nameOfUser" onChange={this.onChangeHandler.bind(this)} />

                    <Label htmlFor="description">Short description:</Label>
                    <Input type="text" name="description" id="description" onChange={this.onChangeHandler.bind(this)} />

                    <Label htmlFor="date">Date:</Label>
                    <Input type="datetime-local" name="date" id="date" onChange={this.onChangeHandler.bind(this)} />

                    <Label htmlFor="peopleNeeded">People needed:</Label>
                    <Input type="number" min="1" max="20" name="peopleNeeded" id="peopleNeeded" onChange={this.onChangeHandler.bind(this)} />

                    <Label htmlFor="sport">Choose sport:</Label>
                    <Select name="sport" id="sport" onChange={this.onChangeHandler.bind(this)}>
                        {this.state.sports.map((sport) => <option key={sport} value={sport}> {sport} </option>)}
                    </Select>

                    <Label htmlFor="city">Choose your city:</Label>
                    <Select name="city" id="city" onChange={this.onChangeHandler.bind(this)}>
                        {this.state.cities.map((city) => <option key={city} value={city}> {city} </option>)}
                    </Select>

                    <Label htmlFor="phoneNumber">Phone number:</Label>
                    <Input type="text" name="phoneNumber" id="phoneNumber" onChange={this.onChangeHandler.bind(this)} />

                    <Label htmlFor="imgUrl">Image Url:</Label>
                    <Input type="text" name="imgUrl" id="imgUrl" onChange={this.onChangeHandler.bind(this)} />

                    <Submit className="activity-submit" value="Create" />
                </Form>
            </Wrapper>
        )
    }
}

export default CreateForm