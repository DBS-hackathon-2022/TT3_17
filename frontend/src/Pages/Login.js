import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const loginlist = [
  {
    username: "user1",
    password: "password",
  },
];

function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    authenticate();
  }

  function authenticate() {
    // <div></div>

    var a = loginlist.map(function (item) {
      if (username == item.username && password == item.password) {
        //redirect
        navigate("/Home");

        console.log("yay");
      } else {
        console.log("nay");
      }
    });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
        <Button variant="contained" type="submit" disabled={!validateForm()} >
          Login
        </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
