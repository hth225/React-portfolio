import React, { Component } from 'react';

class SideBar extends Component {
    state = {
        isBarOpen: false,
    }
    onItemClicked() {
        this.setState({isBarOpen: false})
    }
    onSideBarClicked() {
        this.setState({isBarOpen: !this.state.isBarOpen})
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
            },
        ]
        return (
            <div>
                
            </div>
        );
    }
    
}

export default SideBar;