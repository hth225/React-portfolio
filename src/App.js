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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div>
            <b>Sidebar content</b>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "powderblue" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export default App;
