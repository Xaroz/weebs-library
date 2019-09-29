import React, { useState, useMemo } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TopPage from "./Pages/TopPage";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import SearchPage from "./Pages/SearchPage";
import { UserContext } from "./Components/UserContext";

function App() {
  
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <UserContext.Provider value = {value}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/toppage" component={TopPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
