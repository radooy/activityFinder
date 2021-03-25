import { Component } from "react";
import { Wrapper, Form, Input, Submit, Label } from "./formStyle"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    onChangeHandler(e){
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler(e){
        e.preventDefault();
        fetch("http://localhost:5000/api/auth/login",{
            method:"POST",
            headers: {
                'Content-Type':'application/json',
              },
            body: JSON.stringify({username: this.state.username, password:this.state.password})
        })
        .then(response => response.json())
        .then(data => {
            if(data.message) throw data.message;
          console.log('Success:', data);
        })
        .catch(err => {
          console.log('Error:', err);
        });
    }

    render() {
        return (
            <Wrapper>
                
                <Form onSubmit={this.onSubmitHandler.bind(this)}>
                    <Label htmlFor="username">Username:</Label>
                    <Input type="text" name="username" id="username" onChange={this.onChangeHandler.bind(this)}/>
                    <Label htmlFor="password">Password:</Label>
                    <Input type="password" name="password" id="password" onChange={this.onChangeHandler.bind(this)}/>
                    <Submit value="Log in"/>
                </Form>
            </Wrapper>
        );
    }
}

export default Login