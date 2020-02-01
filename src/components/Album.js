import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Album({ album }) {
  return (
    <div>
      {album.map(card => {
        return <Card card={card} />;
      })}
    </div>
  );
}
