import { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle";
import { Error } from "../Main/mainStyle";
import { fetcher } from "../../utils/helpers";
import { validation } from "../../utils/plainText";


function RegisterForm() {
    const [state, setState] = useState({
        username: "",
        password: "",
        rePassword: "",
        city: "Sofia",
        redirect: null,
        errors: {}
    });

    const cities = useSelector((state) => state.data.value.cities);

    const validateForm = () => {
        const { username, password, rePassword } = state;
        const message = validation.register;
        let errors = {};
        let isValid = true;
        
        if (username.length < 4 || username.length > 20) {
            errors.usernameLength = message.usernameLength;
        };

        if (/^[a-zA-z0-9._-]+$/.test(username) === false) {
            errors.usernameSymbols = message.usernameSymbols;
        };

        if (password.length < 6 || password.length > 40) {
            errors.passwordLength = message.passwordLength;
        };

        if (/^[a-z0-9]+$/.test(password) === false) {
            errors.passwordSymbols = message.passwordSymbols;
        };

        if (password !== rePassword) {
            errors.passwordMissMatch = message.passwordsMissMatch;
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
        const endpoint = "/auth/register";
        const { password, rePassword, city } = state;
        const username = state.username.toLowerCase();

        isValid && fetcher(endpoint, "POST", { username, password, rePassword, city })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                toast.success('Registration complete!');
                setState({redirect: "/login"});
            })
            .catch(err => {
                console.log(err);
                let errors = {};
                errors.usernameIsTaken = err;
                setState((prevState) => ({
                    ...prevState,
                    errors
                }));
        
            });
    };

    if (state.redirect) {
        return <Redirect to={state.redirect} />
    };

    const errors = state.errors;

    return (
        <Wrapper>
            <Form onSubmit={onSubmitHandler}>
                <Label htmlFor="username">Username:</Label>
                <Input type="text" name="username" id="username" placeholder="example123"
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.usernameLength && <Error>{errors.usernameLength}</Error>}
                {errors.usernameIsTaken && <Error>{errors.usernameIsTaken}</Error>}
                {errors.usernameSymbols && <Error>{errors.usernameSymbols}</Error>}

                <Label htmlFor="password">Password:</Label>
                <Input type="password" name="password" id="password"
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.passwordLength && <Error>{errors.passwordLength}</Error>}
                {errors.passwordSymbols && <Error>{errors.passwordSymbols}</Error>}

                <Label htmlFor="rePassword">Repeat password:</Label>
                <Input type="password" name="rePassword" id="rePassword"
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler} />
                {errors.passwordMissMatch && <Error>{errors.passwordMissMatch}</Error>}

                <Label htmlFor="city">Choose your city:</Label>
                <Select name="city" id="city"
                    onChange={onChangeHandler}>
                    {cities.map((city) => <option key={city} value={city}> {city} </option>)}
                </Select>
                <Submit value="Join us" />
            </Form>
        </Wrapper>
    )
}

export default RegisterForm
