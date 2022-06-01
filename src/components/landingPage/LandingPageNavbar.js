import React, { useState } from "react";
import IconMenu from "material-ui/IconMenu";
import Menu from "material-ui/Menu";
import IconButton from "material-ui/IconButton";
import ListIcon from "material-ui/svg-icons/action/list";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import { cyan500 } from "material-ui/styles/colors";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";

import Login from "./Login.js";
import Signup from "./Signup.js";

export default class LandingPageNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
      anchorEl: null,
      open: false
    };
  }

  toggleLoginOrSignup = () => {
    this.setState(
      { login: !this.state.login },
      console.log("toggle", this.state.login)
    );
  };

  handleChange = (event, value) => {
    switch (value) {
      case 1:
        this.props.profileLink();
        break;
      case 2:
        this.props.makePoem();
        break;
      case 3:
        this.props.showPoems();
        break;
      case 4:
        this.props.showTutorial();
        break;
      case 5:
        this.toggleLoginOrSignup();
        break;
      case 6:
        this.props.signup();
        break;
      default:
    }
  };

  render() {
    return (
      <Toolbar style={{ backgroundColor: cyan500 }}>
        <ToolbarGroup firstchild="true">
          <IconMenu
            onChange={this.handleChange}
            iconButtonElement={
              <IconButton>
                <ListIcon />
              </IconButton>
            }
          >
            <MenuItem value={1} primaryText="My Profile" />
            <MenuItem value={2} primaryText="Make a New Poem" />
            <MenuItem value={3} primaryText="All Poems" />
            <MenuItem value={4} primaryText="Tutorial" />
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <FlatButton
            aria-describedby={"login-menu"}
            variant="contained"
            onClick={this.handleChange}
          >
            Login/Signup
          </FlatButton>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            {this.state.login ? <Login /> : <Signup />}
          </Menu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
  // render() {
  //   return (
  //     <Toolbar style={{ backgroundColor: cyan500 }}>
  //       <ToolbarGroup firstchild="true">
  //         <IconMenu
  //           onChange={this.handleChange}
  //           iconButtonElement={
  //             <IconButton>
  //               <ListIcon />
  //             </IconButton>
  //           }
  //         >
  //           <MenuItem value={1} primaryText="My Profile" />
  //           <MenuItem value={2} primaryText="Make a New Poem" />
  //           <MenuItem value={3} primaryText="All Poems" />
  //           <MenuItem value={4} primaryText="Tutorial" />
  //         </IconMenu>
  //       </ToolbarGroup>
  //       <ToolbarGroup lastChild={true}>
  //         <Menu
  //           anchorEl={this.anchorEl}
  //           id="account-menu"
  //           open={this.state.open}
  //           onClose={this.handleClose}
  //           onClick={this.handleClose}
  //           onChange={this.handleChange}
  //         >
  //           <MenuItem value={5} primaryText="Login/Signup">
  //             {this.state.login ? <Login /> : <Signup />}
  //           </MenuItem>
  //         </Menu>
  //         <FlatButton
  //           label="Login/Signup"
  //           primary={false}
  //           onClick={this.props.logout}
  //         />
  //       </ToolbarGroup>
  //     </Toolbar>
  //   );
  // }
}
