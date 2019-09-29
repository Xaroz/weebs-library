import React, { useState, useEffect } from "react";
import { useFetch } from "../Components/useFetch";
import Image from "../Components/Image";

export default function SearchPage(props) {
  const type = props.location.state.type;
  const title = props.location.state.title;
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "Search result for " + title;
  });
  
  const { data } = useFetch(
    `https://api.jikan.moe/v3/search/${type}?q=${title}&limit=12&page=${page}`
  );
  const style = {
    padding: "60px"
  };

  const scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "end");
  };

  return (
    <div className="container text-center">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 ">Search result for {title}</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {!data
            ? "loading..."
            : data.results.map(result => (
                <Image
                  key={result.mal_id}
                  imageUrl={result.image_url}
                  title={result.title}
                  type={result.type}
                />
              ))}
        </div>
      </div>
      <nav style={style}>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className="page-link"
              onClick={
                page === 1
                  ? null
                  : () => {
                      setPage(p => p - 1);
                      scroll();
                    }
              }
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => {
                setPage(p => p + 1);
                scroll();
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
