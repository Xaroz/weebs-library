import React from "react";

export default function ImageSeasonal(props) {
  console.log(props);   
  return (
    <div className="card col-3 text-white bg-primary">
      <img
        src={props.imageUrl}
        className="img-fluid"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text text-center ">{props.title}</p>
      </div>
    </div>
  );
}
