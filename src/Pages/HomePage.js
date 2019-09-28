import React, { useEffect } from "react";
import ImageSeasonal from "../Components/ImageSeasonal";
import { useFetch } from "../Components/useFetch";

export default function HomePage() {
  const { data, loading } = useFetch("https://api.jikan.moe/v3/season");

  useEffect(() => {
    document.title = "Homepage";
  });

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Seasonal Anime</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {!data
            ? "loading..."
            : data.anime.map(anime =>
                anime.type === "TV" || anime.type === "Movie" ? (
                  <ImageSeasonal
                    key={anime.mal_id}
                    imageUrl={anime.image_url}
                    title={anime.title}
                    type={anime.type}
                  />
                ) : null
              )}
        </div>
      </div>
    </div>
  );
}
