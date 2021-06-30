import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    openDrawer: false,
    headerScroll: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 10) {
      this.setState({ headerScroll: true });
    } else {
      this.setState({ headerScroll: false });
    }
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerScroll ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 20px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font-righteous header_logo_venue">NANCY.</div>
            <div className="header_logo_title">Markup Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() =>
              this.setState({ openDrawer: !this.state.openDrawer })
            }
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.openDrawer}
            onClose={() =>
              this.setState({ openDrawer: !this.state.openDrawer })
            }
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
