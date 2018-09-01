// import React, { Component } from 'react';
// import Header from './components/Header'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import Sidebar from "react-sidebar";

const styles ={
  root: {
    backgroundColor: "black",
  },
  contentHeaderMenuLink: {
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "4rem",
    color: "black",
    marginLeft: 20,
    
    
  },
  header: {
    textDecoration: "none",
    fontWeight:"400",
    fontSize:"3rem",
    color: "black",
    marginLeft: 50,
  },
  sidebarContent: {
    fontSize: "2rem",
    display: "flex",
    flexDirection: "column",
    
    justifyContent: "space-between",
    alignContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,


  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div style={styles.sidebarContent}>
            <b href="#1">About</b>
            <b href="#2">About</b>
            <b href="#3">About</b>
            <b href="#4">About</b>
          </div>
            
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "powderblue" } }}
      >
        <a
            onClick={this.onSetSidebarOpen}
            href="#"
            style={styles.contentHeaderMenuLink}
          >=</a>
          <span style={styles.header}>Fortpolio</span>
      </Sidebar>
    );
  }
}

export default App;
