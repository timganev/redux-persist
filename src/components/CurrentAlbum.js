import React from "react";
import Album from "./Album";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function CurrentAlbum({ albumId }) {
  const listReducer = useSelector(state => state.listReducer);
  // var allAlbums = listReducer.list;
  let currentAlbum = [];

  if (listReducer.list) {
    listReducer.list.map(card => {
      if (card.albumId === albumId) {
        currentAlbum.push(card);
        console.log(card.albumId);
      }
    });
    console.log(currentAlbum.length);
  }

  return <Album album={currentAlbum} />;
}
