import React, { useState, useMemo } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TopPage from "./Pages/TopPage";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import SearchPage from "./Pages/SearchPage";
import AnimeDetail from "./Pages/AnimeDetail";
import MangaDetail from "./Pages/MangaDetail";
import Library from "./Pages/Library";
import { UserContext } from "./Components/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  
  const value = useMemo(
    () => ({ user, setUser, animeList, setAnimeList, mangaList, setMangaList }),
    [user, setUser, animeList, setAnimeList, mangaList, setMangaList]
  );

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/toppage" component={TopPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/anime" component={AnimeDetail} />
          <Route exact path="/manga" component={MangaDetail} />
          <Route exatch path = "/library" component= {Library} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
