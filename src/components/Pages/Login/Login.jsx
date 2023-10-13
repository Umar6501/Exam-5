import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-section">
      <div className="Img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"></path>
        </svg>
      </div>
      <div className="login-card d-flex flex-column w-100 h-100 justify-content-center align-items-center">
        <InputGroup className="mb-3 w-25">
          <InputGroup.Text id="basic-addon1" className="px-4">
            Name
          </InputGroup.Text>
          <Form.Control
            placeholder="....."
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3 w-25">
          <InputGroup.Text id="basic-addon1" className="px-3">
            Number
          </InputGroup.Text>
          <Form.Control
            placeholder="+9989__ ___ __ __"
            aria-label="Number"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Link to={"/"} className="w-100 text-center">
          <Button className="w-25" variant="primary">
            Login
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Login;
