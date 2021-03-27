import { Component } from "react";
import { Redirect } from "react-router-dom"
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle"

class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: "",
            city: "Sofia",
            cities: [],
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

        fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.state.username.toLowerCase(), password: this.state.password, rePassword: this.state.rePassword, city: this.state.city })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                console.log('Success:', data);
                this.setState({
                    ...this.state,
                    redirect: "/login"
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
    }


    render() {
        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />

        }
        return (
            <Wrapper>
                <Form onSubmit={this.onSubmitHandler.bind(this)}>
                    <Label htmlFor="username">Username:</Label>
                    <Input type="text" name="username" id="username" onChange={this.onChangeHandler.bind(this)} />
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" name="password" id="password" onChange={this.onChangeHandler.bind(this)} />
                    <Label htmlFor="rePassword">Repeat password:</Label>
                    <Input type="password" name="rePassword" id="rePassword" onChange={this.onChangeHandler.bind(this)} />
                    <Label htmlFor="city">Choose your city:</Label>
                    <Select name="city" id="city" onChange={this.onChangeHandler.bind(this)}>
                        {this.state.cities.map((city) => <option key={city} value={city}> {city} </option>)}
                    </Select>
                    <Submit value="Join us" />
                </Form>
            </Wrapper>
        );
    }
}

export default RegisterForm