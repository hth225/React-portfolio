import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Jumbotron } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Jumbotron className="Jumbo">
        <h1>안녕하세요!</h1>
        <p>
          제 포트폴리오 사이트에 오신 것을 환영합니다! <br />
        </p>
        {/* <p>
          <Button bsStyle="primary" bsSize="large">
            Primary
          </Button>
        </p> */}
      </Jumbotron>
    );
  }
}

export default Header;
