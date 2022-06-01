import React from "react";
import { RaisedButton, TextField } from "material-ui";
import { Link } from "react-router-dom";
import Demo from "../demo/Demo.js";
const defaultImage =
  "http://www.dltk-kids.com/puzzles/jigsaw/2013/puzzle-images/1222.jpg";

const styles = {
  textAlign: "left",
  maxWidth: "600px",
  margin: "0 auto",
  fontSize: "20px"
};

//Login and Signup buttons don't automatically submit on 'enter', and I spent a long time trying to fix that issue.
//If you know a workaround, please let me know!
class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    signupError: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = { ...this.state, image: defaultImage };
    fetch(`${this.props.url}/users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    }).then(() => this.login());
  };

  login = () => {
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

  //All the red is from the single quote in "you're" (line 78). I spent some time researching this and it appears to be a 'Yeah, but it doesnt break, so theres no pressure to fix it' issue
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          {this.state.signupError ? (
            <TextField
              onChange={this.handleChange}
              name="username"
              hintText="Username"
              errorText="Username already taken!"
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
            name="password"
            hintText="Password"
            type="password"
          />
        </form>
        <br />
        <RaisedButton
          label="Submit"
          type="submit"
          primary={true}
          onClick={this.handleSubmit}
        />
        <br />
        <RaisedButton
          label="Back to Login"
          labelStyle={{ fontSize: "12px" }}
          primary={false}
          onClick={this.props.login}
        />
        <p />
      </div>
    );
  }
}

export default Signup;
