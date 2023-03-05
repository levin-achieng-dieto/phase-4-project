import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import House from "./Components/House/House";
import About from "./Components/About/About"
import Footer from "./Components/Footer";


function App() {
  const [user, setUser] = useState(null);
  const [houses, setHouses] = useState([]);

  // console.log(houses);
  // console.log(user);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/houses`)
      .then((res) => res.json())
      .then((houseInfo) => {
        // console.log(houseInfo);
        setHouses(houseInfo);
      });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route exact path="/">
              <Home user={user} houses={houses} setHouses={setHouses} />
            </Route>
            <Route path="/houses/:id">
              <House user={user}/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
