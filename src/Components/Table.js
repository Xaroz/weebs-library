import React from "react";

export default function Table(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.rank}</th>
        <td>
          <img src={props.imageUrl} alt="..." className="img-fluid" />
        </td>
        <td className="font-italic font-weight-bold">{props.title}</td>
        <td className="font-italic font-weight-bold">{props.score}</td>
      </tr>
    </>
  );
}
