import { Component } from "react";
import { Wrapper, Heading, Form, Input, Submit, Label, Select } from "./formStyle"

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: "",
            city: "",
            cities: []
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
        fetch("http://localhost:5000/api/auth/register",{
            method:"POST",
            headers: {
                'Content-Type':'application/json',
              },
            body: JSON.stringify({username: this.state.username, password:this.state.password, rePassword:this.state.rePassword,city: this.state.city})
        }).then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }


    componentDidMount() {
        fetch("http://localhost:5000/api/utils/cities")
            .then(res => res.json())
            .then((data) => {
                this.setState({ cities: data.cities })
                console.log(data.cities);
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Wrapper>
                <Heading>Register:</Heading>
                <Form onSubmit={this.onSubmitHandler.bind(this)}>
                    <Label htmlFor="username">Username:</Label>
                    <Input type="text" name="username" id="username" onChange={this.onChangeHandler.bind(this)} />
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" name="password" id="password" onChange={this.onChangeHandler.bind(this)} />
                    <Label htmlFor="rePassword">Repeat password:</Label>
                    <Input type="password" name="rePassword" id="rePassword" onChange={this.onChangeHandler.bind(this)} />
                    <Label htmlFor="city">Choose your city:</Label>
                    <Select name="city" id="city" onChange={this.onChangeHandler.bind(this)}>
                        {this.state.cities.map((city) => <option key={city}> {city} </option>)}
                    </Select>
                    <Submit value="Register" />
                </Form>
            </Wrapper>
        );
    }
}

export default Register