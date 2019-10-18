import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Navbar extends Component {
  //   classes = useStyles();
  render() {
    return (
      <AppBar position="static">
        <ToolBar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/protected">
            Protected
          </Button>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Navbar;
