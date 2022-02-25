import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Form, Input, Submit, Label } from "./formStyle";
import toast from "react-hot-toast";
import { fetcher } from "../../utils/helpers";
import { logIn } from "../../features/userAuthSlice";
import { useDispatch } from "react-redux";
import { Error } from "../Main/mainStyle";


import React from 'react';

function Login() {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        redirect: null,
    });

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();

    const validateForm = () => {
        const formErrors = {
            username: {},
            password: {}
        };
        let isValid = true;

        if (!userData.username) {
            formErrors.username.required = "Please add a username!";
            isValid = false;
        }

        if (!userData.password) {
            formErrors.password.required = "Please add a password!";
            isValid = false;
        }

        setFormErrors(formErrors);

        return isValid;
    }

    const onChangeHandler = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.toLowerCase()
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return;
        const { username, password } = {...userData};
        const endpoint = "/auth/login";
        fetcher(endpoint, "POST", {username, password})
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                document.cookie = `x-auth-token = ${data.token}`;
                toast.success(`Logged in as ${data.username}!`);
                setUserData((prevState) => ({
                    ...prevState,
                    redirect: "/"
                }));
                dispatch(logIn({username: data.username, id: data.id, city: data.city}));
            })
            .catch(err => {
                toast.error(`${err}`);
            });
    };

    if (userData.redirect) {
        return <Redirect to= {userData.redirect}/>
    };

    return (
        <Wrapper>
            <Form onSubmit={onSubmitHandler}>
                <Label htmlFor="username">Username:</Label>
                <Input type="text" name="username" id="username"
                    onChange={onChangeHandler} />
                {formErrors.username && <Error>{formErrors.username.required}</Error>}
                <Label htmlFor="password">Password:</Label>
                <Input type="password" name="password" id="password"
                    onChange={onChangeHandler} />
                {formErrors.password && <Error>{formErrors.password.required}</Error>}
                <Submit value="Log in" />
            </Form>
        </Wrapper>
    );
};

export default Login;
