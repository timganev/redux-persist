import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { album } from "../store/actions/index";

export default function Card({ card }) {
  const listReducer = useSelector(state => state.listReducer);
  const dispatch = useDispatch();
  let myAlbum = [];
  let favorite = false;

  useEffect(() => {}, []);

  const handleAdd = evt => {
    evt.preventDefault();
    myAlbum = listReducer.album;
    myAlbum.push(card);
    dispatch(album(myAlbum));
    console.log("add");
  };

  const handleDelete = evt => {
    evt.preventDefault();
    myAlbum = listReducer.album;
    for (var i = 0; i < myAlbum.length; i++) {
      if (myAlbum[i].id === card.id) {
        myAlbum.splice(i, 1);
      }
    }
    dispatch(album(myAlbum));
    console.log("delete");
  };

  if (listReducer.album) {
    listReducer.album.map(data => {
      if (data.id === card.id) favorite = true;
    });
  }

  const BtnLink = favorite ? (
    <a
      onClick={handleDelete}
      className="btn-floating btn-small halfway-fab waves-effect waves-light red"
    >
      <i className="material-icons">delete</i>
    </a>
  ) : (
    <a
      onClick={handleAdd}
      className="btn-floating btn-small halfway-fab waves-effect waves-light blue"
    >
      <i className="material-icons">add</i>
    </a>
  );
  return (
    <div className="col s10 m2 l3 center-align">
      <div className="card z-depth-5">
        <span className="card-content">{card.id}</span>

        <div className="card-image">
          <img src={card.url} />
        </div>
        <span className="card-title">{card.title.slice(0, 10)}</span>
        {BtnLink}
      </div>
    </div>
  );
}
