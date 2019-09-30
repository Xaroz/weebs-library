import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import { useFetch } from "../Components/useFetch";

export default function TopPage() {

  const [type, setType] = useState("anime");
  const [buttonName, setButtonName] = useState("Anime");

  useEffect(() => {
    document.title = "Top Rated " + buttonName;
  },[buttonName]);
  
  const changeType = () => {
    let curType = "";
    let curButton = "";
    if (type === "anime") {
      curType = "manga";
      curButton = "Manga";
    }
    else {
      curType = "anime";
      curButton = "Anime";
    }
    setType(curType);
    setButtonName(curButton);
  };

  const { data } = useFetch(`https://api.jikan.moe/v3/top/${type}/1`);

  return (
    <div className="container text-center">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Top Rated</h1>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg font-weight-bold"
            onClick={changeType}
          >
            {buttonName}
          </button>
        </div>
      </div>
      <div className="container">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {!data
              ? null
              : data.top.map(top => (
                  <Table
                    key={top.mal_id}
                    rank={top.rank}
                    imageUrl={top.image_url}
                    score={top.score}
                    title={top.title}
                    sourceType = {type}
                    mal_id = {top.mal_id}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
