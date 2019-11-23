import React from "react";
import { Switch, Route } from "react-router-dom";

// import Home from './views/Home/Home';
import UserDash from './views/UserDash/UserDash';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route exact path="/dashboard">
          <UserDash />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
