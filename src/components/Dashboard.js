import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { list, album } from "../store/actions/index";
import { SERVER_URL } from "../constants";
import Album from "./Album";
import CurrentAlbum from "./CurrentAlbum";
import { Pagination, Icon } from "react-materialize";

export default function Dashboard() {
  const listReducer = useSelector(state => state.listReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const favorites = listReducer.album ? (
    <Album album={listReducer.album} />
  ) : (
    <div></div>
  );

  useEffect(() => {
    fetch(SERVER_URL, { method: "GET" })
      .then(response => response.json())
      .then(responseData => {
        dispatch(list(responseData));
        console.log("fetching...");
      })
      .catch(err => console.error(err));

    if (!listReducer.album) {
      dispatch(album([]));
    }
  }, []);

  const handleSelect = evt => {};

  return (
    <div className="container">
      <h2>Favorites</h2>
      <div className="row">{favorites}</div>
      <h2>Album {page}</h2>
      <Pagination
        activePage={1}
        items={10}
        maxButtons={10}
        onSelect={e => setPage(e)}
      />
      <div className="row">
        <CurrentAlbum albumId={page} />
      </div>
    </div>
  );
}
