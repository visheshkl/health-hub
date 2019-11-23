import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import Home from './views/Home/Home';
import UserDash from './views/UserDash/UserDash';
import LogReg from "./views/LogReg/LogReg";
import TopNav from "./components/TopNav/TopNav";
import JMPSBot from './components/JMPSBot/JMPSBot';

import "./App.css";
import Contact from "./views/ContactUs/ContactUs";

function App() {
  const [isLoggedIn, updateLoginState] = useState(true);

  const logMeOut = () => {
		updateLoginState(false);
		localStorage.setItem('token', '');
  }
  
  return (
    <div className="App">
      <Route path={["/login", "/register", "/"]} exact render={() => 
				<TopNav 
					isLoggedIn={isLoggedIn} 
					logMeOut={logMeOut} 
				/>}
			/>
      <Switch>
        <Route exact path={["/", "/register"]}>
          {/* <Home /> */}
          <LogReg updateLoginState={updateLoginState} />
        </Route>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route path="/dashboard">
          <UserDash isLoggedIn={isLoggedIn} logMeOut={logMeOut} updateLoginState={updateLoginState} />
          <JMPSBot />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
