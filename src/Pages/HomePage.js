import React, { useEffect } from "react";
import Image from "../Components/Image";
import { useFetch } from "../Components/useFetch";

export default function HomePage() {
  const { data } = useFetch("https://api.jikan.moe/v3/season");

  useEffect(() => {
    document.title = "Weeb's Library";
  });

  return (
    <div className="container text-center">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 ">Seasonal Anime</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {!data
            ? "loading..."
            : data.anime.map(anime =>
                anime.type === "TV" || anime.type === "Movie" ? (
                  <Image
                    key={anime.mal_id}
                    imageUrl={anime.image_url}
                    title={anime.title}
                    type={anime.type}
                    sourceType= "anime"
                    mal_id = {anime.mal_id}
                  />
                ) : null
              )}
        </div>
      </div>
    </div>
  );
}
