import React from "react";
import "./Item.css";

function Item({ content, ref, ...restProps }) {
  return <span>{content}</span>;
}

export default Item;
