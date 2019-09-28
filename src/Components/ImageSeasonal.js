import React from "react";

export default function ImageSeasonal(props) {
  return (
    <div className="col-3 ">
      <div className="col-12 card text-white bg-primary">
        <img src={props.imageUrl} className="img-fluid" alt="..." />
        <div className="card-body">
          <p className="card-text text-center font-italic">{props.title}</p>
        </div>
      </div>
    </div>
  );
}
