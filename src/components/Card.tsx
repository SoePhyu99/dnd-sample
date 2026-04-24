import type { Item } from "../lib/data";
import React from "react";

interface Props {
  item: Item;
}

const Card = ({ item }: Props) => {
  return <div>{item.content}</div>;
};

export default Card;
