import React from "react";


export default function AnimeDetail(props) {
  const addItem = () => {
    const item = {
      mal_id: props.data.mal_id,
      image_url: props.data.image_url,
      title: props.data.title,
      type: props.type
    };
    props.setList([...props.list, item]);
  };

  const removeItem = () => {
    props.setList(props.list.filter(item => item.mal_id !== props.data.mal_id));
  };
  const checkButton = () => {
    let exists = false;
    props.list.map(item =>
      item.mal_id === props.data.mal_id ? (exists = true) : null
    );

    if (!exists) {
      return (
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={addItem}
        >
          Add to library
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-outline-danger btn-lg"
          onClick={removeItem}
        >
          Remove from library
        </button>
      );
    }
  };

  return <>{checkButton()}</>;
}
