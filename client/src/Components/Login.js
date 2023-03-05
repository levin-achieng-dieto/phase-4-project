import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
      history.push("/");
    });
  }

  return (
     <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit} className="needs-validation">
              <h3 className="sign">Login</h3>
              <div className="mb-3 mt-3 was-validated">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  autoComplete="off"
                  placeholder="Enter Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3 was-validated">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-success justify-conter-center">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;