import { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Form, Input, Submit, Label } from "./formStyle";
import UserContext from "../Contexts/UserContext";
import toast from "react-hot-toast";
import { fetcher } from "../../utils/helpers";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            redirect: null,
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    };

    static contextType = UserContext;

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value.toLowerCase()
        })
    };

    onSubmitHandler(e) {
        e.preventDefault();
        const { username, password } = this.state;
        const endpoint = "/auth/login";
        fetcher(endpoint, "POST", {username, password})
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                document.cookie = `x-auth-token = ${data.token}`;
                toast.success(`Logged in as ${data.username}!`);
                this.setState({
                    redirect : "/"
                })
                this.context.logIn(data.username,data.id,data.city);
            })
            .catch(err => {
                console.log(err);
                toast.error(`${err}`);
            });
    };

    render() {

        if (this.state.redirect) {
            return <Redirect to= {this.state.redirect}/>
        }
        return (
            <Wrapper>
                <Form onSubmit={this.onSubmitHandler}>
                    <Label htmlFor="username">Username:</Label>
                    <Input type="text" name="username" id="username"
                        onChange={this.onChangeHandler} />
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" name="password" id="password"
                        onChange={this.onChangeHandler} />
                    <Submit value="Log in" />
                </Form>
            </Wrapper>
        );
    };
};

export default Login