import { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: " ",
            password: " "
        }
    }
    render() {
        return (
            <h1>Register</h1>
        );
    }
}

export default Register