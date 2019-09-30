import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Components/UserContext";
import Image from "../Components/Image";

export default function Library() {
  const { user, animeList, mangaList } = useContext(UserContext);
  const [type, setType] = useState("anime");
  const [buttonName, setButtonName] = useState("Anime");

  const changeType = () => {
    let curType = "";
    let curButton = "";
    if (type === "anime") {
      curType = "manga";
      curButton = "Manga";
    } else {
      curType = "anime";
      curButton = "Anime";
    }
    setType(curType);
    setButtonName(curButton);
  };
  useEffect(() => {
    document.title = "Your Library";
  });
  return (
    <div className="container text-center">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
            {user.username}'s&nbsp;
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg font-weight-bold"
              onClick={changeType}
            >
              {buttonName}
            </button>
            &nbsp;Library
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {type === "anime"
            ? animeList.map(anime => (
                <Image
                  key={anime.mal_id}
                  imageUrl={anime.image_url}
                  title={anime.title}
                  type={anime.type}
                  sourceType={type}
                  mal_id={anime.mal_id}
                />
              ))
            : mangaList.map(manga => (
                <Image
                  key={manga.mal_id}
                  imageUrl={manga.image_url}
                  title={manga.title}
                  type={manga.type}
                  sourceType={type}
                  mal_id={manga.mal_id}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
