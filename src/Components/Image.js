import React from "react";
import { Link } from "react-router-dom";

export default function ImageSeasonal(props) {
  return (
    <div className="col-3 ">
      <Link to={{
              pathname: "/" + props.sourceType,
              state: {
                type: props.sourceType,
                mal_id: props.mal_id
              }
            }}>
        <div className="col-12 card text-white bg-primary">
          <img src={props.imageUrl} className="img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text text-center font-italic">{props.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
