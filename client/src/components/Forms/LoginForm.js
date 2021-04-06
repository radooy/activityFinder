import { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Form, Input, Submit, Label } from "./formStyle"
import { Error } from "../Main/mainStyle";
import UserContext from "../Context/Context"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            redirect: null,
            errors:{}
        }
    }

    static contextType = UserContext;

    onFocusHandler(e){
        this.setState({
            ...this.state,
            errors:{}
        })
    }

    onChangeHandler(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value.toLowerCase()
        })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.state.username.toLowerCase(), password: this.state.password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                document.cookie = `x-auth-token = ${data.token}`;
                this.setState({
                    ...this.state,
                    redirect : "/"
                })
                this.context.logIn(data.username,data.id,data.city)
            })
            .catch(err => {
                let errors = {};
                errors.loginFailed = err;
                console.log(err);
                this.setState({
                    errors
                });
            });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to= {this.state.redirect}/>
        }
        return (
            <Wrapper>
                <Form onSubmit={this.onSubmitHandler.bind(this)}>
                    <Label htmlFor="username">Username:</Label>
                    <Input type="text" name="username" id="username"
                        onFocus={this.onFocusHandler.bind(this)}
                        onChange={this.onChangeHandler.bind(this)} />
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" name="password" id="password"
                        onFocus={this.onFocusHandler.bind(this)}
                        onChange={this.onChangeHandler.bind(this)} />
                    <Submit value="Log in" />
                    {this.state.errors.loginFailed && <Error>{this.state.errors.loginFailed}</Error>}
                </Form>
            </Wrapper>
        );
    }
}

export default Login