import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Components/UserContext";

export default function Navbar() {
  const [type, setType] = useState("anime");
  const { user, setUser } = useContext(UserContext);

  const handleChange = event => {
    setType(event.target.value);
  };

  const [title, setTitle] = useState("");

  const handleInputChange = event => {
    setTitle(event.target.value);
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
              value={type}
              onChange={handleChange}
              name="type"
              className="form-control"
            >
              <option value="anime">Anime</option>
              <option value="manga">Manga</option>
            </select>
          </div>

          <input
            className="form-control mr-sm-2"
            type="text"
            name="title"
            placeholder="Search"
            value={title}
            onChange={handleInputChange}
          />
          <Link
            to={{
              pathname: "/search",
              state: {
                type,
                title
              }
            }}
          >
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={event => {
                setTitle("");
              }}
            >
              Search
            </button>
          </Link>
        </form>

        {user ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/library" className="nav-link">
                {user.username} 's Library
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => {
                  setUser(null);
                }}
                className="nav-link"
              >
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
