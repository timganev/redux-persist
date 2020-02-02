import React from "react";
import Album from "./Album";
import { useSelector } from "react-redux";

export default function CurrentAlbum({ albumId }) {
  const listReducer = useSelector(state => state.listReducer);
  let currentAlbum = [];

  if (listReducer.list) {
    listReducer.list.map(card => {
      if (card.albumId === albumId) {
        currentAlbum.push(card);
      }
    });
  }

  return <Album album={currentAlbum} />;
}
