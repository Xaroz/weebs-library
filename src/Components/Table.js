import React from "react";
import { Link } from "react-router-dom";

export default function Table(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.rank}</th>
        <td>
          <Link to={{
              pathname: "/" + props.sourceType,
              state: {
                type: props.sourceType,
                mal_id: props.mal_id
              }
            }}><img src={props.imageUrl} alt="..." className="img-fluid" /></Link>
        </td>
        <td className="font-italic font-weight-bold">{props.title}</td>
        <td className="font-italic font-weight-bold">{props.score}</td>
      </tr>
    </>
  );
}
