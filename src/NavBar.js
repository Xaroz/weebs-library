import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Components/UserContext";

export default function Navbar() {
  const [value, setValue] = useState("Anime");
  const { user, setUser } = useContext(UserContext);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <Link to="/" className="navbar-brand">
        Weeb's Library
      </Link>

      <div className="collapse navbar-collapse justify-content-end ">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/toppage" className="nav-link">
              Top Rated
            </Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <div className="form-group">
            <select
              value={value}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Anime">Anime</option>
              <option value="Manga">Manga</option>
            </select>
          </div>

          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        {user ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {user.username} 's Library
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" onClick ={
                () => {
                  setUser(null);
                }
              } className="nav-link">
                Sign out
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Sign in
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
