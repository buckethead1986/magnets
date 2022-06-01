import React from "react";
import { RaisedButton, TextField } from "material-ui";
import { Link } from "react-router-dom";
import Demo from "../demo/Demo.js";
import Login from "./Login.js";
import Signup from "./Signup.js";

const styles = {
  textAlign: "left",
  align: "left",
  maxWidth: "600px",
  margin: "0 auto",
  fontSize: "20px"
};

//Login and Signup buttons don't automatically submit on 'enter', and I spent a long time trying to fix that issue.
//If you know a workaround, please let me know!
class LandingPage extends React.Component {
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
        <div>
          <p />
          <div style={{ align: "left" }}>
            <p style={{ ...styles, fontSize: 24, textAlign: "center" }}>
              Welcome to Magnets!
            </p>
            <p />
            <p style={styles}>
              Magnets is a fridge magnet poetry game. Login or Sign up and
              create fun little poems and sayings with draggable 'magnetic'
              words.{" "}
            </p>
            <p />
            <p style={styles}>
              Change the word set for new poems, customize your avatar, browse
              all the poems (or just those of Users of your choice), favorite
              and follow other Users and their creations, and have some fun!
            </p>

            <p />
            <p style={styles}>
              Click <Link to="/tutorial">here</Link> for a tutorial
            </p>
          </div>
          <Demo />
        </div>
        <div style={{ align: "right" }}>
          <Login />
        </div>
      </div>
    );
  }
}

export default LandingPage;
