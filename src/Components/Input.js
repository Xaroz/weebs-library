import React from "react";

export default function Input(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.typeName}>{props.labelName}</label>
      <input
        type={props.typeName}
        className="form-control"
        id={props.typeName}
        placeholder={props.placeholderName}
        onChange={props.handleInputChange}
        name = {props.typeName}
        required
      ></input>
    </div>
  );
}
