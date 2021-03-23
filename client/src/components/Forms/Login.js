import { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: " ",
            password: " "
        }
    }
    render() {
        return (
            <h1>Login</h1>
        );
    }
}

export default Login