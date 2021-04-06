import { Component } from "react";
import { Redirect } from "react-router-dom"
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle"
import { Error } from "../Main/mainStyle"

class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: "",
            city: "Sofia",
            cities: [],
            redirect: null,
            errors: {}
        }
    }
    
    validateForm = () => {
        const {username, password, rePassword} = this.state;
        let errors = {};
        let isValid = true;

        if(username.length<4 || username.length>20){
            errors.usernameLength = "Username must be between 4 and 20 symbols!";
            isValid = false;
        }

        if(/^[a-z0-9._-]+$/.test(username)===false){
            errors.usernameSymbols = "Username must contain only latin letters or numbers!"
            isValid=false;
        }

        if(password.length<6 || password.length>40){
            errors.passwordLength = "Password must be between 6 and 40 symbols!";
            isValid = false;
        }

        if(/^[a-z0-9]+$/.test(password) === false){
            errors.passwordSymbols = "Password must contain only latin letters or numbers!"
        }

        if(password!==rePassword){
            errors.passwordMissMatch = "Password and repeat password fields must match!";
            isValid = false;
        }

        this.setState({errors},()=>console.log(this.state.errors));
        return isValid;

    }

    onFocusHandler(e){
        this.setState({
            ...this.state,
            errors:{}
        })
    }

    onChangeHandler(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler(e) {
        e.preventDefault();

        let isValid = this.validateForm();

        isValid && fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.state.username.toLowerCase(), password: this.state.password, rePassword: this.state.rePassword, city: this.state.city })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                this.setState({
                    ...this.state,
                    redirect: "/login"
                });
            })
            .catch(err => {
                console.log(err);
                let errors = {};
                errors.usernameIsTaken = err;
                this.setState({
                    errors
                })
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
                    <Input type="text" name="username" id="username" placeholder="example123"
                        onFocus={this.onFocusHandler.bind(this)}
                        onChange={this.onChangeHandler.bind(this)} />
                    {this.state.errors.usernameLength && <Error>{this.state.errors.usernameLength}</Error>}
                    {this.state.errors.usernameIsTaken && <Error>{this.state.errors.usernameIsTaken}</Error>}
                    {this.state.errors.usernameSymbols && <Error>{this.state.errors.usernameSymbols}</Error>}
                    
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" name="password" id="password"
                        onFocus={this.onFocusHandler.bind(this)}
                        onChange={this.onChangeHandler.bind(this)} />
                    {this.state.errors.passwordLength && <Error>{this.state.errors.passwordLength}</Error>}
                    {this.state.errors.passwordSymbols && <Error>{this.state.errors.passwordSymbols}</Error>}
                    
                    <Label htmlFor="rePassword">Repeat password:</Label>
                    <Input type="password" name="rePassword" id="rePassword"
                        onFocus={this.onFocusHandler.bind(this)}
                        onChange={this.onChangeHandler.bind(this)} />
                    {this.state.errors.passwordMissMatch && <Error>{this.state.errors.passwordMissMatch}</Error>}
                    
                    <Label htmlFor="city">Choose your city:</Label>
                    <Select name="city" id="city"
                        onChange={this.onChangeHandler.bind(this)}>
                        {this.state.cities.map((city) => <option key={city} value={city}> {city} </option>)}
                    </Select>
                    <Submit value="Join us" />
                </Form>
            </Wrapper>
        );
    }
}

export default RegisterForm