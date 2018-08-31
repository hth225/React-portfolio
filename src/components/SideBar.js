import React, { Component } from "react";
import SideBar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);
class SideBar extends Component {
  state = {
    isBarOpen: false,
    sidebarDocked: mql.matches
  };
  onItemClicked() {
    this.setState({ isBarOpen: false });
  }
  onSideBarClicked() {
    this.setState({ isBarOpen: !this.state.isBarOpen });
  }
  componentWillMount() {

      mql.addListener(this.mediaQueryChanged);
  }
  

  render() {
    const NavItem = [
      {
        title: "Top",
        url: "#top"
      },
      {
        title: "About",
        url: "#about"
      },
      {
        title: "Portfolio",
        url: "#portfolio"
      },
      {
        title: "Contact",
        url: "#contact"
      }
    ];
    return <div />;
  }
}

export default SideBar;
