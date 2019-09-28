import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [value, setValue] = useState("Anime");

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

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/toppage" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/toppage" className="nav-link">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
