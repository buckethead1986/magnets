import React from "react";
import { RaisedButton, TextField } from "material-ui";
import { Link } from "react-router-dom";
import Demo from "../demo/Demo.js";

const styles = {
  textAlign: "left",
  align: "left",
  maxWidth: "600px",
  margin: "0 auto",
  fontSize: "20px"
};

//Login and Signup buttons don't automatically submit on 'enter', and I spent a long time trying to fix that issue.
//If you know a workaround, please let me know!
class Login extends React.Component {
  state = {
    username: "",
    password: "",
    loginError: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = this.state;
    fetch(`${this.props.url}/auth`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          localStorage.setItem("token", json.jwt);
        } else {
          this.setState({
            loginError: true
          });
        }
      })
      .then(() => this.props.fetchUsers())
      .then(() => this.props.history.push("/profile"));
  };

  //All the red is from the single quote in "you're" (line 63). I spent some time researching this and it appears to be a 'Yeah, but it doesnt break, so theres no pressure to fix it' issue
  render() {
    // const link = <a href={this.props.history.push("/profile")}>log in</a>;

    return (
      <div>
        <h2>Login</h2>
        <form>
          {this.state.loginError === true ? (
            <TextField
              onChange={this.handleChange}
              name="username"
              hintText="Username"
              errorText="Username or Password incorrect"
            />
          ) : (
            <TextField
              onChange={this.handleChange}
              name="username"
              hintText="Username"
            />
          )}
          <br />
          <TextField
            onChange={this.handleChange}
            type="password"
            name="password"
            hintText="Password"
          />
        </form>
        <br />
        <RaisedButton
          label="Login"
          type="submit"
          primary={true}
          onClick={this.handleLogin}
        />
        <br />
        <RaisedButton
          label="Click here to sign up"
          labelStyle={{ fontSize: "12px" }}
          primary={false}
          onClick={this.props.signup}
        />
      </div>
    );
  }
}

export default Login;
