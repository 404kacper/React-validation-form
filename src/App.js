import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Window from "./components/Window";
import TrustedPage from "./components/pages/TrustedPage";
import AuthState from "./context/authentiaction/AuthState";

import "./App.css";

const App = () => {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={Window}
            />
            <Route path="/about" component={TrustedPage} />
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
};

export default App;
