import React, { useContext } from "react";
import { useFetch } from "../Components/useFetch";
import { InlineIcon } from "@iconify/react";
import starIcon from "@iconify/icons-bytesize/star";
import { UserContext } from "../Components/UserContext";

export default function AnimeDetail(props) {
  const type = props.location.state.type;
  const mal_id = props.location.state.mal_id;
  const { user } = useContext(UserContext);

  const { data, loading } = useFetch(
    `https://api.jikan.moe/v3/${type}/${mal_id}`
  );

  console.log(data);
  return (
    <div className="container">
      {loading ? (
        "loading..."
      ) : (
        <div className="text-center">
          <h1 className="font-italic">{data.title}</h1>
          <div className="row justify-content-center pt-4 pb-4">
            <div className="col-xs-6">
              <img
                className="img-thumbnail"
                src={data.image_url}
                alt={data.title}
              />
            </div>
            <div className="col-xs-6 pl-4">
              <h4>
                <InlineIcon icon={starIcon} color="#FAC113" width="30" />{" "}
                {data.score ? data.score : "N/A"}
              </h4>
              <h4>Aired from: </h4>
              <p>{data.aired.string}</p>
              {user ? (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                >
                  Add to library
                </button>
              ) : null}
            </div>
          </div>
          <div className="container">
            <h2>Sypnosis</h2>
            <hr />
            <p>{data.synopsis}</p>
          </div>
          <div className="container pt-3">
            <h2>Genres</h2>
            <hr />
            <ul className="list-group">
              {data.genres.map(genre => (
                <li className="list-group-item border-0 p-0" key={genre.mal_id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="container pt-3">
            <h2>Trailer</h2>
            <hr />
            {data.trailer_url ? (
              <iframe
                src={data.trailer_url}
                frameBorder="0"
                width="1000"
                height="500"
                allow="encrypted-media"
                allowFullScreen
                title="video"
              />
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
