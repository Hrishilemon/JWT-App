import React, { Fragment } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

// Components

import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            />
            <Route
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
