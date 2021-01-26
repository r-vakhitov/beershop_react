import React from "react";

function Item({ item }) {
  return (
    <div>
      <span>{item.name}</span>
    </div>
  );
}

export default Item;
