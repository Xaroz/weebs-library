import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TopPage from "./Pages/TopPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/toppage" component={TopPage} />
        {/* <Route exact path = "/page2" component = {Page2} />
          <Route exact path = "/reducer" component = {Reducer} />
          <Route component={PageError} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
