import React from "react";
import Card from "./Card";

export default function Album({ album }) {
  return (
    <div>
      {album.map(card => {
        return <Card card={card} />;
      })}
    </div>
  );
}
