import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { list, album } from "../store/actions/index";
import { SERVER_URL } from "../constants";
import Album from "./Album";
import CurrentAlbum from "./CurrentAlbum";
import { Pagination } from "react-materialize";

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

  return (
    <div id="favorites" className="container">
      <h4 className="white-text">Favorites</h4>
      <div className="row">{favorites}</div>
      <h4 className="white-text">Album {page}</h4>
      <Pagination
        activePage={1}
        items={100}
        maxButtons={15}
        onSelect={e => setPage(e)}
      />
      <div className="row">
        <CurrentAlbum albumId={page} />
      </div>
      <Pagination
        activePage={1}
        items={100}
        maxButtons={15}
        onSelect={e => setPage(e)}
      />
      <p className="container  ">
        You can find me on{" "}
        <a href="https://www.linkedin.com/in/tihomirganev" title="My linkedin">
          linkedin
        </a>
      </p>
    </div>
  );
}
