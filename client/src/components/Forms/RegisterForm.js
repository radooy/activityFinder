import { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle";
import { Error } from "../Main/mainStyle";
import toast from "react-hot-toast";
import { fetcher } from "../../utils/helpers";

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
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    };
    
    validateForm = () => {
        const {username, password, rePassword} = this.state;
        let errors = {};
        let isValid = true;

        if(username.length<4 || username.length>20){
            errors.usernameLength = "Username must be between 4 and 20 symbols!";
        };

        if(/^[a-zA-z0-9._-]+$/.test(username)===false){
            errors.usernameSymbols = "Username must contain only latin letters or numbers!";
        };

        if(password.length<6 || password.length>40){
            errors.passwordLength = "Password must be between 6 and 40 symbols!";
        };

        if(/^[a-z0-9]+$/.test(password) === false){
            errors.passwordSymbols = "Password must contain only latin letters and/or numbers!";
        };

        if(password!==rePassword){
            errors.passwordMissMatch = "Password and repeat password fields must match!";
        };

        this.setState({
            errors
        });

        if(Object.keys(errors).length>0){
            toast.error("Please fill the form with valid data!");
            isValid=false;
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

        const isValid = this.validateForm();
        const endpoint = "/auth/register";
        const { password , rePassword, city} = this.state;
        const username = this.state.username.toLowerCase();

        isValid && fetcher(endpoint, "POST", {username, password, rePassword, city})
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                toast.success('Registration complete!');
                this.setState({
                    redirect: "/login"
                });
            })
            .catch(err => {
                console.log(err);
                let errors = {};
                errors.usernameIsTaken = err;
                this.setState({
                    errors
                });
            });
        };

    componentDidMount() {
        fetch("http://localhost:5000/api/utils/cities")
            .then(res => res.json())
            .then((data) => {
                this.setState({ cities: data.cities });
            })
            .catch(err => console.log(err));
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        let errors = this.state.errors;
        return (
            <Wrapper>
                <Form onSubmit={this.onSubmitHandler}>
                    <Label htmlFor="username">Username:</Label>
                    <Input type="text" name="username" id="username" placeholder="example123"
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.usernameLength && <Error>{errors.usernameLength}</Error>}
                    {errors.usernameIsTaken && <Error>{errors.usernameIsTaken}</Error>}
                    {errors.usernameSymbols && <Error>{errors.usernameSymbols}</Error>}
                    
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" name="password" id="password"
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.passwordLength && <Error>{errors.passwordLength}</Error>}
                    {errors.passwordSymbols && <Error>{errors.passwordSymbols}</Error>}
                    
                    <Label htmlFor="rePassword">Repeat password:</Label>
                    <Input type="password" name="rePassword" id="rePassword"
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler} />
                    {errors.passwordMissMatch && <Error>{errors.passwordMissMatch}</Error>}
                    
                    <Label htmlFor="city">Choose your city:</Label>
                    <Select name="city" id="city"
                        onChange={this.onChangeHandler}>
                        {this.state.cities.map((city) => <option key={city} value={city}> {city} </option>)}
                    </Select>
                    <Submit value="Join us" />
                </Form>
            </Wrapper>
        );
    };
};

export default RegisterForm