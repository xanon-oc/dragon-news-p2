import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
    <Container className="text-center mt-4">
      <img src={logo} className="mb-2" alt="" />
      <p>
        <small>Journalism Without Fear or Favour</small>
      </p>
      <p>
        <small>{moment().format("LLLL")}</small>
      </p>
    </Container>
  );
};

export default Header;
