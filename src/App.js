import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Window from "./components/Window";
import RedirectPage from "./components/pages/RedirectPage";

import "./App.css";

class App extends React.Component {
  state = {
    formUsers: [
      {
        id: 1,
        email: "kacper.sionkowski@gmail.com",
        password: "haslo123"
      },
      {
        id: 2,
        email: "kacper.sionkowski@topmail.com",
        password: "samolot123"
      }
    ],
    authorization: {
      status: false
    }
  };

  compareUserState = userState => {
    var found = this.state.formUsers.some(
      user =>
        user.email === userState.email && user.password === userState.password
    );
    if (found) {
      this.state.authorization.status = true;
      console.log("Authenticated successfully");
    } else {
      this.state.authorization.status = false;
      console.log("Authentication failed");
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Window compareUserState={this.compareUserState} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={RedirectPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
