import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Button, Jumbotron } from "react-bootstrap";
import "./Header.css";
import PropTypes from "prop-types";

const styles = {
    root: {
        fontWeight: 300,
    },
    header: {
        backgroundColor: "#03a9f4",
        color: "white",
        padding: "16px",
        fontSize: "1.5em",
    }
}

const MaterialTitlePanel = props => {
    console.log(props);
    const rootStyle = props.styles ? { ...styles.root, ...props.styles } : styles.root;
    return (
        <div style={rootStyle}>
            <div style={styles.header}>{props.title}</div>
            {props.children}
        </div>
    )
}

MaterialTitlePanel.PropTypes = {
    style: proptypes.object,
    title: proptypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: proptypes.object,
}

// class Header extends Component {
//   render() {
//     return (
//       <Jumbotron className="Jumbo">
//         <h1>안녕하세요!</h1>
//         <p>
//           제 포트폴리오 사이트에 오신 것을 환영합니다! <br />
//         </p>
//         {/* <p>
//           <Button bsStyle="primary" bsSize="large">
//             Primary
//           </Button>
//         </p> */}
//       </Jumbotron>
    
//     );
//   }
// }

export default MaterialTitlePanel;
